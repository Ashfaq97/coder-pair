import { db } from "@/db";
import { users } from "@/db/schema";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { Session } from "inspector";
import { DefaultSession, NextAuthOptions, getServerSession } from "next-auth";
import { Adapter } from "next-auth/adapters";
import Google from "next-auth/providers/google";

declare module "next-auth" {
    interface Session extends DefaultSession {
      user: {
        id: string;
      } & DefaultSession["user"];
    }
  }

export const authConfig = {
    adapter: DrizzleAdapter(db) as Adapter,
    session: {
        strategy: "jwt"
    },
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            const dbUser = await db.query.users.findFirst({
                where: (users, { eq }) => eq(users.email, token.email!),
            })

            if (!dbUser) {
                throw new Error("no user with email found")
            }

            return {
                id: dbUser.id,
                name: dbUser.name,
                email: dbUser.email,
                picture: dbUser.image
            }
        },
        async session({token, session}) {
            if(token) {
                session.user = {
                    id: token.id as string,
                    name: token.name,
                    email: token.email,
                    image: token.picture,
                }
            }

            return session;
        }
    }
} satisfies NextAuthOptions;

export function getSession() {
    return getServerSession(authConfig)
}
import { db } from "@/db";
import NextAuth from "next-auth/next";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import Google from "next-auth/providers/google";
import type { Adapter } from "next-auth/adapters";

const handler = NextAuth({
    adapter: DrizzleAdapter(db) as Adapter,
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        })
    ]
})

export { handler as GET, handler as POST }
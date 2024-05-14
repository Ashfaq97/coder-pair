import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "./provider";
import { Header } from "@/components/header";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });
export const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Coder Pair",
  description: "Find your programming buddy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <NextTopLoader />
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// import dynamic from "next/dynamic";
import Chat from "@/components/Chat";
import Providers from "@/components/Providers";

// const NoSSR = dynamic(() => import('../components/Chat'), { ssr: false })

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BookBuddy",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className={inter.className}>{children}</div>
          <Chat />
        </Providers>
      </body>
    </html>
  );
}

// we need to provide something to entire app - query-client provider in order to use react query throughout our entire app - context

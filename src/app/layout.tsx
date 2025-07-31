import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import RootSessionProvider from "@/provider/root-session-provider";
import AuthenticationProvider from "@/provider/authentication-provider";
import NextTopLoader from "nextjs-toploader";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FinSuite – Smart Personal Finance Tracker",
  description:
    "Track your expenses, manage investments, monitor stocks and mutual funds — all in one intuitive dashboard with FinSuite.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextTopLoader showSpinner={false} />
        <RootSessionProvider>
          <AuthenticationProvider>{children}</AuthenticationProvider>
        </RootSessionProvider>
      </body>
    </html>
  );
}

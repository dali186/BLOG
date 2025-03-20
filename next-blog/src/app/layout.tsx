import { ReactNode } from "react";
import NavHead from "@/containers/GreetPage/components/NavHead/NavHead";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import '@/app/globals.css';
import Category from "@/containers/GreetPage/components/TagSection/TagSection";
import HorizontalArticleList from "@/containers/GreetPage/components/HorizontalArticleList/HorizontalArticleList";
import LinearArticleList from "@/containers/GreetPage/components/LinearArticleList/LinearArticleList";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BLOG",
  description: "developed by dali186",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="ko">
      <body className={`antialiased w-full sm:w-2/3 mx-auto`}>
        <NavHead />
        <main>{children}</main>
      </body>
    </html>
  )
}

export default RootLayout;
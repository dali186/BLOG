import { ReactNode } from "react";
import NavHead from "@/containers/NavHead/NavHead";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import '@/app/globals.css';
import Category from "@/containers/Category/Category";
import HorizontalArticleList from "@/containers/HorizontalArticleList/HorizontalArticleList";
import LinearArticleList from "@/containers/LinearArticleList/LinearArticleList";

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
        <Category />
        <Category />
        <HorizontalArticleList />
        <LinearArticleList />
      </body>
    </html>
  )
}

export default RootLayout;
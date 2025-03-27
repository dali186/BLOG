import { ReactNode } from "react";
import type { Metadata } from "next";
import '@/app/globals.css';
import Header from "@/components/Header";
import { headers } from "next/headers";

export const metadata: Metadata = {
  title: "BLOG",
  description: "developed by dali186",
};

const ArticleRootLayout = async ({ children }: { children: ReactNode }) => {
  const pathName = (await headers()).get("x-next-pathname") || "";

  return (
    <html lang="ko">
      <body className="antialiased w-full xl:w-1/2 mx-auto">
        <main>{children}</main>
      </body>
    </html>
  )
}

export default ArticleRootLayout;
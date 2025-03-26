import { ReactNode } from "react";
import type { Metadata } from "next";
import '@/app/globals.css';
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "BLOG",
  description: "developed by dali186",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="ko">
      <body className={`antialiased w-full sm:w-2/3 mx-auto`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}

export default RootLayout;
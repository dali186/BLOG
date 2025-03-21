import { ReactNode } from "react";
import type { Metadata } from "next";
import '@/app/globals.css';

export const metadata: Metadata = {
  title: "BLOG",
  description: "developed by dali186",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="ko">
      <body className={`antialiased w-full sm:w-2/3 mx-auto`}>
        <header className="bg-white">
              <div className="container mx-auto flex items-center justify-between p-4">
                <div className="flex itmes-center">
                  <a className="gh-head-logo" href="/">
                      <img src="/images/logo.png" alt="MainLogo" className="h-8" />
                  </a>
                </div>
                <div className="flex items-center">
                  <button className="gh-search gh-icon-btn" aria-label="Search this site">
                      <svg xmlns='http://www.w3.org/2000/svg' fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke='currentColor'>
                          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                      </svg>
                  </button>
                </div>
              </div>
          </header>
        <main>{children}</main>
      </body>
    </html>
  )
}

export default RootLayout;
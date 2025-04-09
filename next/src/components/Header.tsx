import { verifySession } from "@/lib/auth/session";
import SignOutHref from "./atoms/SignOutHref";

const Header = async() => {
  const isLoggedIn = (await verifySession()).isLoggedIn;
    return (
      <header>
        <div className="container mx-auto flex items-center justify-between p-4">
          {/* 로고 */}
          <div className="flex items-center">
            <a href="/" className="gh-head-logo">
              <img src="/images/logo.png" alt="MainLogo" className="h-8" />
            </a>
          </div>

          <div className="text-xs sm:text-base flex items-center space-x-1 dark:text-gray-300">
            {!isLoggedIn ? (
              <a href="/signin" className="text-gray-700 dark:text-gray-300 hover:text-emerald-500 font-noto">Signin</a>
            ) : (
              <>
                <a href="/articles/write" className="text-gray-700 dark:text-gray-300 hover:text-emerald-500 font-noto">Write</a>
                  <p>•</p>
                <SignOutHref />
              </>
            )}
          </div>
        </div>
      </header>
    );
  };

  export default Header;
  
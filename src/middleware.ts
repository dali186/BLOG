import { NextRequest, NextResponse } from "next/server";
import { decryptJWT } from "./lib/auth/session";

// 1. 접근 제한 경로 설정
const authRequireRoutes = ["/articles/write"];

export const middleware = async (request: NextRequest) => {
  // 2. 접근 경로 확인
  const path = request.nextUrl.pathname;
  const isAuthRequired = authRequireRoutes.includes(path);

  // 3. 세션 확인
  const cookie = request.cookies.get("session")?.value;
  const session = cookie ? await decryptJWT(cookie) : null;

  if (isAuthRequired && !session?.userEmail) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  return NextResponse.next();
};

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
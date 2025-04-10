import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

// 1. 접근 제한 경로 설정
const authRequireRoutes = ["/articles/write"];

export const middleware = async (request: NextRequest) => {
  // 2. 접근 경로 확인
  const path = request.nextUrl.pathname;
  const isAuthRequired = authRequireRoutes.includes(path);

  // 3. 세션 확인 - Edge Runtime 호환 방식
  const cookie = request.cookies.get("session")?.value;
  let isAuthenticated = false;

  if (cookie) {
    try {
      // JWT 검증을 Edge Runtime에서 지원하는 방식으로 수행
      const secretKey = process.env.SESSION_SECRET;
      if (!secretKey) {
        console.error("SESSION_SECRET is not defined");
        return NextResponse.redirect(new URL("/signin", request.url));
      }

      const encodedKey = new TextEncoder().encode(secretKey);
      const { payload } = await jwtVerify(cookie, encodedKey, {
        algorithms: ["HS256"],
      });

      isAuthenticated = !!payload.userEmail;
    } catch (error) {
      console.error("JWT verification failed:", error);
    }
  }

  if (isAuthRequired && !isAuthenticated) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  return NextResponse.next();
};

export const config = {
  matcher: ["/articles/write"],
};
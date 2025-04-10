'use client';

import { signUp } from "@/app/actions/auth";
import { useActionState } from "react";

const SignUpPage = () => { 
  const [state, action, pending] = useActionState(signUp, undefined);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full p-6 rounded-lg">
        <div className="flex justify-center mb-8">
          <img src="/images/logo.png" alt="Logo" className="w-30 h-20" />
        </div>
        <h1 className="text-2xl font-semibold text-center  mt-8 mb-6">회원가입</h1>
        <form action={action}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-300">이메일</label>
            <input type="email" id="email" name="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" />
          </div>
          {state?.errors?.email && (
            <p className="text-red-500 mb-4" aria-live="polite">
              {state.errors.email[0]}
            </p>
          )}

          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 text-sm text-gray-600 dark:text-gray-300">이름</label>
            <input type="text" id="name" name="name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" />
          </div>
          {state?.errors?.name && (
            <p className="text-red-500 mb-4" aria-live="polite">
              {state.errors.name[0]}
            </p>
          )}

          <div className="mb-4">
            <label htmlFor="alias" className="block mb-2 text-sm text-gray-600 dark:text-gray-300">별명</label>
            <input type="alias" id="alias" name="alias" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" />
          </div>
          {state?.errors?.alias && (
            <p className="text-red-500 mb-4" aria-live="polite">
              {state.errors.alias[0]}
            </p>
          )}

          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 text-sm text-gray-600 dark:text-gray-300">비밀번호</label>
            <input type="password" id="password" name="password" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" />
          </div>
          {state?.errors?.password && (
            <div className="mb-4 text-red-500" aria-live="polite">
              <p className="font-semibold">필요 요건:</p>
              <ul className="list-disc pl-5">
                {state.errors.password.map((error) => (
                  <li key={error}>{error}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block mb-2 text-sm text-gray-600 dark:text-gray-300">비밀번호 확인</label>
            <input type="password" id="confirmPassword" name="confirmPassword" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" />
          </div>
          {state?.errors?.confirmPassword && (
            <p className="text-red-500 mb-4" aria-live="polite">
              {state.errors.confirmPassword[0]}
            </p>
          )}

          <button type="submit" className="w-32 bg-emerald-600 text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mb-2">등록</button>
        </form>
        <div className="text-center">
          <p className="text-sm underline">이미 계정이 있으신가요? <a href="/signin" className="text-emerald-600">로그인</a></p>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;

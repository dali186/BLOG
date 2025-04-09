'use client';

import { signIn } from "@/app/actions/auth";
import { useActionState } from "react";

const LoginPage = () => { 
  const [state, action, pending] = useActionState(signIn, undefined);

  return (
    <div className='p-6 pt-1'>
      <div className="w-full min-h-screen flex flex-col sm:justify-center items-center sm:pt-0">
        <div className="w-full sm:max-w-md p-5 mx-auto">
          <h2 className="mb-12 text-center text-5xl font-extrabold">Welcome.</h2>
          <form action={action}>
            <div className="mb-4">
              <label className="block mb-1" htmlFor="email">이메일</label>
              <input id="email" type="text" name="email" className="py-2 px-3 border border-gray-300 focus:border-emerald-300 focus:outline-none focus:ring focus:ring-emerald-200 rounded-md shadow-sm mt-1 block w-full text-black" />
            </div>
            <div className="mb-4">
              <label className="block mb-1" htmlFor="password">비밀번호</label>
              <input id="password" type="password" name="password" className="py-2 px-3 border border-gray-300 focus:border-emerald-300 focus:outline-none focus:ring focus:ring-emerald-200 focus:ring-opacity-80 rounded-md shadow-sm disabled:bg-gray-300 mt-1 block w-full text-black" />
            </div>
            {state?.errors?.email && (
              <p className="text-red-500 mb-4" aria-live="polite">
                {state.errors.email[0]}
              </p>
            )}

            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center">
                <input id="remember_me" type="checkbox" className="border border-gray-300 text-emerald-600 shadow-sm focus:border-emerald-300 focus:ring focus:ring-emerald-200 focus:ring-opacity-50" />
                <label htmlFor="remember_me" className="ml-2 block text-sm leading-5 text-gray-900 dark:text-gray-300"> 아이디 기억 </label>
              </div>
              <a href="#" className="text-sm"> 비밀번호를 잊으셨나요? </a>
            </div>
            <div className="mt-6">
              <button type="submit" className="w-full inline-flex items-center justify-center px-4 py-2 bg-emerald-600 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-emerald-700 active:bg-emerald-700 focus:outline-none focus:border-emerald-700 focus:ring focus:ring-emerald-200 disabled:opacity-25 transition">Sign In</button>
            </div>
            <div className="mt-6 text-center">
              <a href="/signup" className="underline">회원가입</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

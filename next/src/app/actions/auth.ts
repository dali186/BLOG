'use server';

import * as bcrypt from 'bcryptjs';
import { SignUpFormState, SignUpFormSchema } from "@/lib/validation/signUp";
import { SignInFormState, SignInFormSchema } from "@/lib/validation/signIn";
import { Member } from "@/types/types";
import { addMember, getMember } from "@/service/memberFetch";
import { createSession, deleteSession } from '@/lib/auth/session';
import { redirect } from 'next/navigation';

/* 로그인 */
export const signIn = async(formState: SignInFormState, formData: FormData) => {
    const validatedFields = SignInFormSchema.safeParse({
        email: formData.get('email'),
        password: formData.get('password')
    })

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    const { email, password } = validatedFields.data;
    const loginMember = await getMember('email', email);
    if (!loginMember) { return { errors: { email: ['이메일과 비밀번호를 확인해주세요.'] } };}
    
    const comparePwd = await bcrypt.compare(password, loginMember.memberPwd);
    if (!comparePwd) { return { errors: { email: ['이메일과 비밀번호를 확인해주세요.'] } };}

    await createSession(loginMember.email);
    // Redirect
    redirect('/');
}

/* 로그아웃 */
export const signOut = async() => {
    await deleteSession();
    redirect('/signin');
}

/* 회원가입 */
export const signUp = async(formState: SignUpFormState, formData: FormData) => {
    const validatedFields = SignUpFormSchema.safeParse({
        email: formData.get('email'),
        name: formData.get('name'),
        alias: formData.get('alias'),
        password: formData.get('password'),
        confirmPassword: formData.get('confirmPassword'),
    })

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    const { email, name, alias, password } = validatedFields.data;
    const encryptedPwd = await bcrypt.hash(password,10);
    const joinMember: Member = {
        email,
        memberName: name,
        memberPwd: encryptedPwd,
        memberAlias: alias,
        memberRole: 'user'
    };
    
    // 사용자 추가
    await addMember(joinMember);
    // 세션 추가
    await createSession(joinMember.email);
    // Redirect
    redirect('/');
}
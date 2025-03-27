'use server';

import * as bcrypt from 'bcrypt';
import { FormState, SignUpFormSchema } from "@/lib/validation/signUp";
import { Member } from "@/types/types";
import { addMember } from "@/service/memberFetch";

export const signUp = async(formState: FormState, formData: FormData) => {
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
    };
    
    addMember(joinMember);
    // 4. Create user session
    // 5. Redirect user
}
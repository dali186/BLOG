import { z } from 'zod'
 
export const SignInFormSchema = z.object({
    email: z.string().email({ message: '이메일 형식에 맞게 입력해주세요.' }).trim(),
    password: z
      .string()
      .min(8, { message: '비밀번호는 8자 이상이여야합니다.' })
      .regex(/[0-9]/, { message: '비밀번호는 특수문자를 포함해야합니다.' })
      .regex(/[^a-zA-Z0-9]/, {
        message: '비밀번호는 적어도 하나 이상의 특수기호를 포함해야합니다.',
      })
      .trim()
})

export type SignInFormState =
  | {
      errors?: {
        email?: string[]
        password?: string[]
      };
      message?: string
    }
  | undefined;
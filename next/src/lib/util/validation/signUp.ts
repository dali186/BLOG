import { z } from 'zod'
 
export const SignUpFormSchema = z.object({
    email: z.string().email({ message: '이메일 형식에 맞게 입력해주세요.' }).trim(),
    name: z
    .string()
    .min(2, { message: '이름은 두 글자 이상이여야합니다.' })
    .trim(),
    alias: z
    .string()
    .max(8, { message: '별명은 8자 이하이여야합니다.' })
    .trim(),
    password: z
    .string()
    .min(8, { message: '비밀번호는 8자 이상이여야합니다.' })
    .regex(/[0-9]/, { message: '비밀번호는 특수문자를 포함해야합니다.' })
    .regex(/[^a-zA-Z0-9]/, {
      message: '비밀번호는 적어도 하나 이상의 특수기호를 포함해야합니다.',
    })
    .trim(),
    confirmPassword: z.string(),
})
.refine((data) => data.password === data.confirmPassword, {
    message: "비밀번호가 일치하지 않습니다.",
    path: ["confirmPassword"], 
  });
 
export type SignUpFormState =
  | {
      errors?: {
        name?: string[]
        alias?: string[]
        email?: string[]
        password?: string[]
        confirmPassword?: string[];
      }
      message?: string
    }
  | undefined
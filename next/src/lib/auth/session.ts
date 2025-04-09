import { getMember } from '@/service/memberFetch';
import { Member, SessionPayload } from '@/types/types';
import { jwtVerify, SignJWT } from 'jose';
import { cookies } from 'next/headers';
import 'server-only';

const secrectKey = process.env.SESSION_SECRET;
const encodedKey = new TextEncoder().encode(secrectKey);

export const encryptJWT = async(payload: SessionPayload) => {
    return new SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256'})
        .setIssuedAt()
        .setExpirationTime('7d')
        .sign(encodedKey);
}

export const decryptJWT = async(session: string | undefined = '') => {
    try {
        const { payload } = await jwtVerify(session, encodedKey, {
            algorithms: ['HS256'],
        })
        return payload;
    } catch (error) {
        console.log('JWT이 존재하지 않거나나 복호화에 실패하였습니다.');
    }
}


export const createSession = async(userEmail: string) => {
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
    const session = await encryptJWT({ userEmail, expiresAt });
    const cookieStore = await cookies();

    cookieStore.set('session', session, {
        httpOnly: true,
        secure: false,
        expires: expiresAt,
        sameSite: 'lax',
        path: '/',
    });
}

export const updateSession = async() => {
    const session = (await cookies()).get('session')?.value;
    const payload = await decryptJWT(session);

    if (!session || ! payload) { return null; }

    const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    const cookieStore = await cookies();

    cookieStore.set('session', session, {
        httpOnly: true,
        secure: true,
        expires: expires,
        sameSite: 'lax',
        path: '/',
    })
}

export const deleteSession = async () => {
  const cookieStore = await cookies()
  cookieStore.delete('session')
}

export const verifySession = async () => {
    const cookie = (await cookies()).get('session')?.value;
    const session = await decryptJWT(cookie);

    return !session?.userEmail ? { isLoggedIn: false } : { isLoggedIn: true, userEmail: session.userEmail };

}

export const getMemberInfo = async (): Promise<Member | null> => {
    const session = await verifySession();

    if (!session) return null;
   
    try {
      const member = await getMember('email', session.userEmail as string);   

      return member;
    } catch (error) {
      console.log('사용자 정보 조회 실패');

      return null;
    }
}
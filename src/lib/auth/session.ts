import { SessionPayload } from '@/types/types';
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
        console.log('JWT 복호화에 실패하였습니다.');
    }
}


export const createSession = async(userEmail: string) => {
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
    const session = await encryptJWT({ userEmail, expiresAt });
    const cookieStore = await cookies();

    cookieStore.set('session', session, {
        httpOnly: true,
        secure: true,
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
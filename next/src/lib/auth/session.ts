import { getMember } from '@/service/memberFetch';
import { Member, SessionPayload } from '@/types/types';
import { jwtVerify, SignJWT } from 'jose';
import { cookies } from 'next/headers';
import 'server-only';
import { logger } from '../util/logger';

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
    if (!session) return null;
    
    try {
        const { payload } = await jwtVerify(session, encodedKey, {
            algorithms: ['HS256'],
        });
        
        return payload;
    } catch (error) {
        return null;
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
  const cookieStore = await cookies();
  const session = await verifySession();

  if (session.userEmail && typeof session.userEmail === 'string') {
    logger.info('Session Deleted', { userEmail: session.userEmail });
  }
  cookieStore.delete('session');
}

export const verifySession = async () => {
    const cookie = (await cookies()).get('session')?.value;
    const session = await decryptJWT(cookie);

    if (!session) return { isLoggedIn: false };
    
    return !session.userEmail ? { isLoggedIn: false } : { isLoggedIn: true, userEmail: session.userEmail };
}

export const getMemberInfo = async (): Promise<Member | null> => {
    const session = await verifySession();

    if (!session) return null;
   
    try {
      const member = await getMember('email', session.userEmail as string);   

      return member;
    } catch (error) {
      logger.error('사용자 정보 조회 실패', { error });

      return null;
    }
}

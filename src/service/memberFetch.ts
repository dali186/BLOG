import { Member } from "@/types/types"
import clientPromise from "@/lib/db/mongod"

/*
    사용자 조회

    @param {email} string (게시글 제목)
    @returns {Member | null}
 */
export const getMember = async (type: string, value: string): Promise<Member> => {
    try {
        const client = await clientPromise;
        const db = client.db(process.env.MONGODB_NAME);

        let cond: any = {};
        if (type === 'email') { cond = { email: value } }
        else if (type === 'sn') { cond = { sn: value } }
        else { throw new Error('유효하지 않은 속성입니다.') }

        const member: Member | null = await db.collection<Member>('member').findOne(cond);
        console.log(member);
        if (!member) {
            throw new Error('해당 사용자를 찾을 수 없습니다.');
        }
        return member;

    } catch (err: any) {
        throw new Error(err.message);
    }
}

/*
    사용자 전체 조회

    @param {Member} member (게시글 제목)
    @returns {Member | null}
 */
export const getAllMember = async (): Promise<Member[]> => {
    try {
        const client = await clientPromise;
        const db = client.db(process.env.MONGODB_NAME);
        const members: Member[] = await db.collection<Member>('member').find().toArray();

        return members;

    } catch (err: any) {
        throw new Error(err.message);
    }
}

/*
    사용자 신규 등록

    @param {Member} member (게시글 제목)
    @returns {Member | null}
 */
export const addMember = async ( member: Member) => {
    try {
        const client = await clientPromise;
        const db = client.db(process.env.MONGODB_NAME);
        const result = await db.collection('member').insertOne({
            ...member
        });

        return result;
    } catch (err: any) {
        throw new Error(err.message);
    }
}


/*
    사용자 제거

    @param {Member} member (게시글 제목)
    @returns {Member | null}
 */
export const removeMember = () => {

}
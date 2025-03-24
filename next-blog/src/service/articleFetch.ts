import clientPromise from "@/utils/db/mongod";
import { Article } from "@/types/types";

/*
    게시글 리스트 조회
    
    @param {string} slug (게시글 제목)
    @returns {Article | null}
*/
export const getAllAtricles = async ( slug: string ): Promise<Article[]> => {
    try {
        const client = await clientPromise;
        const db = client.db(process.env.MONGODB_NAME);
        const articles: Article[] = slug
            ? await db.collection<Article>('articles').find({ slug }).toArray()
            : await db.collection<Article>('articles').find().toArray();

            return articles;
    } catch (err: any)  {
        throw new Error(`Slug '${slug}'에 해당하는 Article을 찾을 수 없습니다.`)
    }
}

/*
    게시글 조회

    @param {string} slug (게시글 제목)
    @returns {Article | null}
*/
export const getArticle = async ( slug: string ): Promise<Article> => {
    try {
        const client = await clientPromise;
        const db = client.db(process.env.MONGODB_NAME);
        const article: Article | null = await db
            .collection<Article>('articles')
            .findOne({ slug });

        if (!article) {
            throw new Error('해당 Article을 찾을 수 없습니다.');
        }

        return article;
    } catch (err: any) {
        throw new Error(err.message);
    }
}
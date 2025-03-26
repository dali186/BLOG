import clientPromise from "@/utils/db/mongod";
import { Article } from "@/types/types";

/*
    게시글 리스트 조회
    
    @param {string} slug (게시글 제목)
    @returns {Article | null}
*/
export const getAllAtricles = async ( slug?: string ): Promise<Article[]> => {
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
    게시글 리스트 태그 조회

    @param {string} tagName (태그이름)
    @returns {Article[] | null}
*/
export const getArticlesByTag = async ( tagName?: string ): Promise<Article[]> => {
    try {
        const client = await clientPromise;
        const db = client.db(process.env.MONGODB_NAME);
        const query = tagName ? { tags: { $in: [tagName] } } : {};

        const articles: Article[] = await db.collection<Article>('articles').find(query).toArray();

        return articles;
    } catch (err: any)  {
        throw new Error(`Slug '${tagName}'에 해당하는 Article을 찾을 수 없습니다.`)
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

/*
    게시글 작성

    @param {Article} article
    @returns {Article | null}
*/
export const addArticle = async ( article: Article ) => {
    try {
        const client = await clientPromise;
        const db = client.db(process.env.MONGODB_NAME);
        const result = await db.collection('articles').insertOne({
            ...article
        });

        return result;
    } catch (err: any) {
        throw new Error(err.message);
    }
}

/*
    카테고리 리스트 조회

    @param
    @returns {string[] | null}
*/
export const getCategories = async () => {
    try{
        const client = await clientPromise;
        const db = client.db(process.env.MONGODB_NAME);
        
    } catch (err: any) {
        throw new Error(err.message);
    }
}

/* 
    태그 리스트 조회 
    
    @param 
    @returns {string[] | null}
*/
export const getTags = async () => {
    try{
        const client = await clientPromise;
        const db = client.db(process.env.MONGODB_NAME);
        const result = await db.collection('articles').aggregate([
            { $unwind: '$tags' },
            { $group: { _id: null, uniqueTags: { $addToSet: '$tags' } } },
            { $project: { _id: 0, uniqueTags: 1 } }
        ]).toArray();

        return result.length > 0 ? result[0].uniqueTags : [];
    } catch (err: any) {
        throw new Error(err.message);
    }
}
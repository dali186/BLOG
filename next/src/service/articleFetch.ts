import clientPromise from "@/lib/db/mongod";
import { Article, Category } from "@/types/types";
import { mkdir, writeFile } from "fs/promises";
import path from "path";
import fs from "fs";
import { BlobServiceClient } from "@azure/storage-blob";

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
    게시글 리스트 조건 조회

    @param {string} cond{type, value} (조건)
    @returns {Article[] | null}
*/
export const getArticlesByCond = async ( type: string, value: string ): Promise<Article[]> => {
    try {
        const client = await clientPromise;
        const db = client.db(process.env.MONGODB_NAME);

        let cond: any = {};
        if (type === 'category') { cond = { category: value }} 
        else if (type === 'tags') { cond = { tags: { $in: [value] } } }

        const articles: Article[] = await db.collection<Article>('articles').find(cond).toArray();

        return articles;
    } catch (err: any)  {
        throw new Error(`Slug '${value}'에 해당하는 Article을 찾을 수 없습니다.`)
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
    게시글 임시 저장

    @param {Formdata} formdata
    @returns {Article | null}
*/
export const addArticleTemp = async ( formData: FormData ) => {
    try {
        const client = await clientPromise;
        const db = client.db(process.env.MONGODB_NAME);

        const tempArticle: Article = {
            slug: formData.get('slug') as string,
            description: formData.get('description') as string,
            category: formData.get('category') as string,
            tags: [],
            content: formData.get('content') as string,
            authorId: formData.get('authorId') as string,
            authorName: formData.get('authorName') as string,
            createdAt: new Date(),
            updatedAt: new Date(),
        }
        await db.collection('articleTemp').insertOne({
            ...tempArticle
        })

        return tempArticle;
    } catch (err: any) {
        throw new Error(err.message);
    }
}

/*
    카테고리 리스트 조회

    @param
    @returns {string[] | null}
*/
export const getCategories = async (): Promise<Category[]> => {
    try{
        const client = await clientPromise;
        const db = client.db(process.env.MONGODB_NAME);
        const categories = await db.collection<Category>('category').find().toArray();

        return categories;        
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

/*
    에디터 이미지 업로드

    @param File
    @returns {string}
*/
export const uploadEditorImage = async(image: File) => {
    if (!image) { throw new Error('이미지가 없습니다.'); }
    
    const ext = path.extname(image.name);
    const imgName = `${Date.now()}${ext}`;
    const uploadPath = path.join(process.cwd(), process.env.IMG_STORE_PATH as string);

    if (!fs.existsSync(uploadPath)) {
        await mkdir(uploadPath, { recursive: true });
    }

    const imgPath = path.join(uploadPath, imgName);
    const buffer = Buffer.from(await image.arrayBuffer());
    await writeFile(imgPath, buffer);

    const imageUrl = `/uploads/${imgName}`;

    return imageUrl;
}

/*
    에디터 이미지 업로드 with Azure Blob Storage

    @param File
    @returns {string}
*/
export const uploadEditorImageWithAzure = async(image: File) => {
    if (!image) { throw new Error('이미지가 없습니다.'); }

    const connStr = process.env.NEXT_PUBLIC_BLOB_CONN_STR;
    const container = process.env.NEXT_PUBLIC_BLOB_CONTNR;

    if (!connStr || !container) {
        throw new Error('Azure Blob Storage 설정 누락');
      }

    try {
        // BlobServiceClient 초기화
        const blobServiceClient = BlobServiceClient.fromConnectionString(connStr as string);
        const containerClient = blobServiceClient.getContainerClient(container as string);

        // 파일명 생성
        const fileName = `${Date.now()}-${image.name}`;
        const blockBlobClient = containerClient.getBlockBlobClient(fileName);
        
        // File 객체를 ArrayBuffer로 변환하여 업로드
        const arrayBuffer = await image.arrayBuffer();
        await blockBlobClient.uploadData(arrayBuffer, {
            blobHTTPHeaders: { blobContentType: image.type },
        });

        const imgUrl = `https://${blobServiceClient.accountName}.blob.core.windows.net/${container}/${fileName}`;

        return imgUrl;
    } catch (err: any) {
        console.error('Azure Blob Storage 업로드 실패: ', err);
        throw new Error('이미지 업로드 실패');
    }
}
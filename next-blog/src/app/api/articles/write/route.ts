import { addArticle } from "@/service/articleFetch";
import { Article } from "@/types/types";
import { error } from "console";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
    try {
        const article: Article = await request.json();
        if (!article.slug || !article.content) {
            return NextResponse.json({ error: '제목과 내용은 필수입니다.' }, { status: 400 });
        }
        const result = await addArticle(article);

        return NextResponse.json({ message: '아티클 업로드 SUCC', article: article }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: '아티클 업로드 FAILED' }, { status: 500 });
    }
}
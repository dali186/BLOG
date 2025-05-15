import { getArticlesByCond } from "@/service/articleService";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
    try {
        const { searchParams } = request.nextUrl;
        const type = searchParams.get('type');
        const value = searchParams.get('value');

        if (!type || !value) {
            return NextResponse.json({ error: '검색 조건 오류' }, { status: 400 });
        }

        const articles = await getArticlesByCond(type, value);
        return NextResponse.json(articles, { status: 200 });
    } catch (error) {
        console.error('API error:', error);
        return NextResponse.json({ error: '아티클 조회 실패' }, { status: 500 });
    }
}
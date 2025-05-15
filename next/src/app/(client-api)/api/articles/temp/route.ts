import { addArticleTemp } from "@/service/articleService";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
    try {
        const formData = await request.formData();
        const result = await addArticleTemp(formData);

        return NextResponse.json({ message: '임시저장이 완료되었습니다.', article: result }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: '임시저장 실패.' }, { status: 500 });
    }
}
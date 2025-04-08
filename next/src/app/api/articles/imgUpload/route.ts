import { uploadEditorImage, uploadEditorImageWithAzure } from "@/service/articleFetch";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
    try {
        const formData = await request.formData();
        const file = formData.get('upload') as File;
        const imageUrl = await uploadEditorImageWithAzure(file);
        
        return NextResponse.json({ url: imageUrl }, { status: 200 });
    } catch (error) {
        console.error('API error:', error);
        return NextResponse.json({ error: '아티클 조회 실패' }, { status: 500 });
    }
}

'use server';

import { getMemberInfo } from "@/lib/auth/session"
import { separateTags } from "@/lib/util/util";
import { addArticle } from "@/service/articleFetch";
import { Article, Member } from "@/types/types"
import { redirect } from "next/navigation";

export const addArticleAction = async (formData: FormData) => {
    // 1. 사용자 정보
    const member: Member | null = await getMemberInfo();
    if (!member) { throw new Error('사용자 정보가 누락되었습니다.'); }

    // 2. 아티클 정보 매핑
    const article: Article = {
        slug: formData.get('slug') as string,
        category: formData.get('category') as string,
        content: formData.get('content') as string,
        description: formData.get('description') as string,
        tags: separateTags(formData.get('tag') as string),
        authorId: member.email,
        authorName: member.memberName,
        createdAt: new Date(),
        updatedAt: new Date(),
    }
    console.log(article);
    // 3. 저장
    await addArticle(article);
    redirect('/articles');
}
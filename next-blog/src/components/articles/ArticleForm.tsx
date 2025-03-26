'use client';

import { useState } from "react";
import CKTextEditorWrapper from "../editor/CKEditor/CKTextEditorWrapper";
import EditorTitle from "../editor/EditorTitle";
import Footer from "../editor/EditorFooter";
import { Article } from "@/types/types";

const ArticleForm = () => {
    const [slug, setSlug] = useState('');
    const [content, setContent] = useState('');

    const handleSave = async() => {
        const newArticle: Article = {
            slug,
            category: '테스트객체',
            content,
            tags: ['테스트', '테흐스트'],
            authorId: '123123123',
            authorName: '김주원',
            createdAt: new Date(),
            updatedAt: new Date()
        }
        try {
            const response = await fetch('/api/articles/write', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(newArticle),
            });
            if (response.ok) {
                console.log('아티클 업로드 완료', newArticle);
            } else {
                console.error('아티클 업로드 실패 ', await response.text());
            }
        } catch (error) {
            console.error('아티클 저장 오류 ', error);
        }
    }

    return(
        <div className="p-6 pt-1">
            <div className="relative z-0 mb-6 w-full group">
                <EditorTitle value={slug} onChange={setSlug} />
            </div>
            <div>
                <CKTextEditorWrapper onChange={setContent}/>
            </div>
            <Footer onSave={handleSave} />
        </div>
    );
}

export default ArticleForm;
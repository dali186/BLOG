import ArticleForm from "@/components/articles/ArticleForm";
import Loader from "@/components/Loader";
import { getArticle } from "@/service/articleFetch";
import { Article } from "@/types/types";
import { Suspense } from "react";

export default async({ params }: { params:  Promise<{ slug: string }> }) => {
    const slug = (await params).slug;
    const decodedSlug = decodeURIComponent(slug);
    const article: Article = await getArticle(decodedSlug);

    return(
        <Suspense fallback={<Loader />}>
            <ArticleForm article={article} />
        </Suspense>
    )
}

export const revalidate =  60;
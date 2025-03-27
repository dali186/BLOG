import VerticalArticleCardList from "@/components/articles/VerticalArticleCardList";
import Loader from "@/components/Loader";
import { getAllAtricles, getArticlesByTag } from "@/service/articleFetch";
import { Article } from "@/types/types";
import { Suspense } from "react";

export default async({ params }: { params: Promise<{ tagName: string }> }) => {
    const tagName = (await params).tagName;
    const decodedTagName = decodeURIComponent(tagName);
    const articles: Article[] = await getArticlesByTag(decodedTagName);

    return(
        <Suspense fallback={<Loader />}>
            <VerticalArticleCardList articles={articles} />
        </Suspense>
    )
}

export const revalidate = 60;
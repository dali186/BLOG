import VerticalArticleCardList from "@/components/articles/VerticalArticleCardList";
import Loader from "@/components/Loader";
import { getArticlesByCond } from "@/service/articleFetch";
import { Article } from "@/types/types";
import { Suspense } from "react";

export default async({ params }: { params: Promise<{ tagName: string }> }) => {
    const tagName = (await params).tagName;
    const decodedTagName = decodeURIComponent(tagName);
    const articles: Article[] = await getArticlesByCond('tags', decodedTagName);
    const type = 'Tag';

    return(
        <Suspense fallback={<Loader />}>
            <VerticalArticleCardList articles={articles} type={type} value={decodedTagName} />
        </Suspense>
    )
}

export const revalidate = 60;
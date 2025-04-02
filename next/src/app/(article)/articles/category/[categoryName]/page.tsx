import VerticalArticleCardList from "@/components/articles/VerticalArticleCardList";
import Loader from "@/components/Loader";
import { getArticlesByCond } from "@/service/articleFetch";
import { Article } from "@/types/types";
import { Suspense } from "react";

export default async({ params }: { params: Promise<{ categoryName: string }> }) => {
    const categoryName = (await params).categoryName;
    const decodedcategoryName = decodeURIComponent(categoryName);
    const articles: Article[] = await getArticlesByCond('category', decodedcategoryName);
    const type = 'Category';

    return(
        <Suspense fallback={<Loader />}>
            <VerticalArticleCardList articles={articles} type={type} value={decodedcategoryName} />
        </Suspense>
    )
}

export const revalidate = 60;
import VerticalArticleCardList from "@/components/articles/VerticalArticleCardList";
import Loader from "@/components/Loader";
import { getAllAtricles } from "@/service/articleFetch";
import { Article } from "@/types/types";
import { Suspense } from "react";

export default async() => {
    const articles: Article[] = await getAllAtricles();

    return(
        <Suspense fallback={<Loader />}>
            <VerticalArticleCardList articles={articles} />
        </Suspense>
    )
}

export const revalidate = 60;
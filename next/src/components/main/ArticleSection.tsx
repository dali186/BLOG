import { getAllAtricles } from "@/service/articleFetch";
import { Article } from "@/types/types";
import { Suspense } from "react";
import Loader from "../Loader";
import VerticalArticleCardList from "../articles/VerticalArticleCardList";

const ArticleSection = async() => {
    const articles: Article[] = await getAllAtricles();

    return (
        <div>
            <div className="font-noto text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl p-6 pt-1">
                <p># Recent Articles</p>
            </div>
            <div>
            <Suspense fallback={<Loader />}>
                <VerticalArticleCardList articles={articles} type=""/>
            </Suspense>
            </div>
        </div>
    );
}

export default ArticleSection;
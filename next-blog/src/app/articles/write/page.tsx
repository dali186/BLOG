import ArticleForm from "@/components/articles/ArticleForm";
import Loader from "@/components/Loader";
import { Suspense } from "react";

const ArticleWritePage = () => {

    return(
        <Suspense fallback={<Loader />}>
            <ArticleForm />
        </Suspense>
    )
}

export default ArticleWritePage;
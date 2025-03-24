import ArticleForm from "@/components/articles/ArticleForm";
import Loader from "@/components/Loader";
import { Suspense } from "react";

export default async() => {

    return(
        <Suspense fallback={<Loader />}>
            <ArticleForm />
        </Suspense>
    )
}

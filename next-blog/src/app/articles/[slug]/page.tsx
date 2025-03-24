import { getArticle } from "@/service/articleFetch"
import { Suspense } from "react";
import Loader from "@/components/Loader";
import SingleArticle from "@/components/articles/SingleArticle";

export default async({ params }: { params: Promise<{ slug: string }> }) => {
    const slug = (await params).slug;
    const article = await getArticle(slug);
    return(
        <Suspense fallback={<Loader />}>
            <SingleArticle article={article} />
        </Suspense>
    )
}

export const revalidate = 0;
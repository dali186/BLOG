import { Article } from "@/types/types";

interface ArticleCardProps {
    article: Article;
}

const ArticleCard = ({ article }: ArticleCardProps ) => {
    const articleDate = article?.createdAt ? new Date(article.createdAt).toLocaleDateString('ko-KR', {year: 'numeric', month: '2-digit', day: '2-digit'}) : '';

    return(
        <div className="bg-white p-6 pt-1 relative font-dot text-sm">
            <div className="flex justify-start text-gray-500">
                {articleDate}
            </div>
            <h2 className="text-2xl font-noto mb-1">{article.slug}</h2>
            <p className="text-gray-600 mb-6 line-clamp-3">{article.content}</p>
            <div className="mt-3 flex justify-between">
                <p className="text-bold"><span className="italic text-gray-500">written by </span>{article?.authorName}</p>
                <a href={`/articles/${article.slug}`} className="text-emerald-600 inline-flex itmes-center"> 
                    <span>더 자세히 읽어보기</span>
                </a>
            </div>
            <hr className="mt-5" />
        </div>
    );
}

export default ArticleCard;
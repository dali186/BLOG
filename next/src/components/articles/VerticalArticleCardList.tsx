import { Article } from '@/types/types';
import ArticleVerticalCard from './ArticleVerticalCard';

interface VerticalArticleCardListProps {
    articles: Article[];
    type: string;
    value?: string;
}

const VerticalArticleCardList = ({ articles, type, value }: VerticalArticleCardListProps) => {

    return(
        <div>
            <div className="p-6 pt-1 font-dot text-3xl">
                {type != null && value != null && (
                    <span>
                        Result By {type}: <b className="text-emerald-600">'{value}'</b>
                    </span>
                )}
            </div>
            <div>
                {articles.map((article, index) => (
                    <ArticleVerticalCard key={index} article={article} />
                ))}
            </div>
        </div>
    );
}

export default VerticalArticleCardList;
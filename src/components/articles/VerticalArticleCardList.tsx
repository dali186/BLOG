import { Article } from '@/types/types';
import ArticleVerticalCard from './ArticleVerticalCard';

interface VerticalArticleCardListProps {
    articles: Article[];
}

const VerticalArticleCardList = ({ articles }: VerticalArticleCardListProps) => {

    return(
        <div>
            {articles.map((article, index) => (
                <ArticleVerticalCard key={index} article={article} />
            ))}
        </div>
    );
}

export default VerticalArticleCardList;
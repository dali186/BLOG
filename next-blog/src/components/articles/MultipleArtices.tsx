import { Article } from '@/types/types';
import ArticleCard from './ArticleCard';

interface MultipleArticlesProps {
    articles: Article[];
}

const MultipleArticles = ({ articles }: MultipleArticlesProps) => {

    return(
        <div>
            {articles.map((article, index) => (
                <ArticleCard key={index} article={article} />
            ))}
        </div>
    );
}

export default MultipleArticles;
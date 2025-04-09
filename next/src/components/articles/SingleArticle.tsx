import { Article } from '@/types/types';

interface SingleArticleProps {
  article: Article | null;
}

const SingleArticle = ({ article }: SingleArticleProps) => {
  const articleDate = article?.createdAt ? new Date(article.createdAt).toLocaleDateString('ko-KR', {year: 'numeric', month: '2-digit', day: '2-digit'}) : '';
  const articleTime = article?.createdAt ? new Date(article.createdAt).toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit', hour12: false }).replace(/\s/g, '') : '';

  return (
    <div className='w-full md:w-9/10 mx-auto'>
      <div className='mx-5 my-3 text-sm'>
        <a href={`/articles/category/${article?.category}`} className='text-emerald-600 font-dot tracking-widest'>{article?.category}</a>
      </div>
      <div className='w-full text-gray-800 dark:text-gray-100 text-xl lg:text-4xl px-5 font-noto leading-none'>
        {article?.slug}
      </div>
      <div className="w-full text-gray-500 dark:text-gray-400 text-sm lg:text-lg px-5 pb-5 pt-2 flex justify-between">
        <p>{article?.authorName}</p>
        <span>{articleDate + ' ' + articleTime}</span>
      </div>
      <hr className='mt-2 mb-4'/>
      <div className="px-5 w-full mx-auto"
          dangerouslySetInnerHTML={{ __html: article?.content || '' }}
      >
      </div>
    </div>
  );
}

export default SingleArticle;
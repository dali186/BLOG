import { Article } from '@/types/types';

interface SingleArticleProps {
  article: Article | null;
}

export default function SingleArticle({ article }: SingleArticleProps) {
  const wrtString = `${article?.createdAt}, ${article?.authorId} 작성`;

  return (
    <div className='w-full md:w-3/5 mx-auto'>
      <div className='mx-5 my-3 text-sm'>
        <a href="#" className='text-red-600 font-dot tracking-widest'>{article?.category}</a>
      </div>
      <div className='w-full text-gray-800 text-4xl px-5 font-noto leading-none'>
        {article?.slug}
      </div>
      <div className='w-full text-gray-500 px-5 pb-5 pt-2'>
        {wrtString}
      </div>
      <hr className='mt-2 mb-4'/>
      <div className="px-5 w-full mx-auto">
        {article?.content}
      </div>
    </div>
  );
}
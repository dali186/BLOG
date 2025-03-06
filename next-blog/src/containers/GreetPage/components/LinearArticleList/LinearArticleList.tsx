import React from 'react';

type Article = {
  id: number;
  title: string;
  description: string;
  author: string;
  date: string;
};

const articles: Article[] = [
  {
    id: 1,
    title: '첫 번째 기사 제목',
    description: '첫 번째 기사의 설명 내용입니다.',
    author: '저자1',
    date: '2025-03-05',
  },
  {
    id: 2,
    title: '두 번째 기사 제목',
    description: '두 번째 기사의 설명 내용입니다.',
    author: '저자2',
    date: '2025-03-06',
  },
  {
    id: 3,
    title: '세 번째 기사 제목',
    description: '세 번째 기사의 설명 내용입니다.',
    author: '저자3',
    date: '2025-03-07',
  },
];
const title = "Recently";

const LinearArticleList = () => {
  return (
    <div className="space-y-6 my-5 ">
        <h2 className="text-3xl font-noto mb-4">{title}</h2>
        {articles.map((article) => (
            <div
            key={article.id}
            className="p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
                <h2 className="text-2xl font-semibold text-gray-800">{article.title}</h2>
                <p className="text-gray-600 mt-2">{article.description}</p>
                <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
                    <span>{article.author}</span>
                    <span>{article.date}</span>
                </div>
            </div>
        ))}
    </div>
  );
};

export default LinearArticleList;

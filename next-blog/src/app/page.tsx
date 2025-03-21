const Home = () => {
  const articles = [
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

  const article2s = [
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


  return (
    <>
      {/* <TagSection title="Tags"/> */}
      <div className="space-y-4 my-5 ">
        <h2 className="text-3xl font-noto mb-4">'테스트'</h2>
        <div className="flex space-x-6 overflow-x-auto py-5">
          {articles.map((article) => (
            <div
              key={article.id}
              className="flex-shrink-0 w-64 p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h2 className="text-xl font-semibold text-gray-800">{article.title}</h2>
              <p className="text-gray-600 mt-2">{article.description}</p>
              <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
                <span>{article.author}</span>
                <span>{article.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-6 my-5 ">
        <h2 className="text-3xl font-noto mb-4">'테스트'</h2>
        {article2s.map((article) => (
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
    </>
  );
}

export default Home;

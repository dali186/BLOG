'use client';

import { useState } from 'react';

const WriteArticle = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 여기서 API 호출 또는 데이터 처리 로직 추가
    console.log({ title, content, tags: tags.split(',').map(tag => tag.trim()) });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">게시글 작성</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* 제목 입력 */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              제목
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="제목을 입력하세요"
              required
            />
          </div>

          {/* 내용 입력 */}
          <div>
            <label htmlFor="content" className="block text-sm font-medium text-gray-700">
              내용
            </label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={5}
              placeholder="내용을 입력하세요"
              required
            />
          </div>

          {/* 태그 입력 */}
          <div>
            <label htmlFor="tags" className="block text-sm font-medium text-gray-700">
              태그 (쉼표로 구분)
            </label>
            <input
              type="text"
              id="tags"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="태그1, 태그2, 태그3"
            />
          </div>

          {/* 제출 버튼 */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            게시글 등록
          </button>
        </form>
      </div>
    </div>
  );
}

export default WriteArticle;
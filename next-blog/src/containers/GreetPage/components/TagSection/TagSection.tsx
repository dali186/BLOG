"use client"

import axios from 'axios';
import TagList from './components/TagList';
import { useEffect } from 'react';

const getCategories = async () => {
  const response = await fetch('/api/v1/article/categories');
  console.log(response);
}

const TagSection = ({ title }: any) => {
  const categories = [
    { categorySn: 1, name: '프로그래밍 언어' },
    { categorySn: 2, name: '웹 개발' },
    { categorySn: 3, name: '프레임워크' },
    { categorySn: 4, name: '라이브러리' },
    { categorySn: 5, name: '데이터베이스' },
    { categorySn: 6, name: '인프라' },
    { categorySn: 7, name: 'DevOps' },
    { categorySn: 8, name: '알고리즘' },
  ];

  useEffect(() => {
    getCategories();
  })

  return (
    <div className="space-y-4 mb-3">
      <h2 className="text-3xl font-noto mb-4">{title}</h2>
      <TagList categories={categories} />
    </div>
  );
};

export default TagSection;

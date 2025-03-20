"use client"

import axios from 'axios';
import TagList from './components/TagList';
import { useEffect, useState } from 'react';

const getCategories = async () => {
  try {
    const response = await axios.get('/api/v1/article/categories');
    
    return response.data.data;
  } catch (error) {
    console.error(error);
    return [];
  }
  
}

const TagSection = ({ title }: any) => {
  const [categories, setCategories] = useState<any[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getCategories();
      setCategories(data);
    };
    fetchCategories();
  }, []);

  return (
    <div className="space-y-4 mb-3">
      <h2 className="text-3xl font-noto mb-4">{title}</h2>
      <TagList categories={categories} />
    </div>
  );
};

export default TagSection;

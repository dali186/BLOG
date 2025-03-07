import { randomCategoryColorPicker } from '@/utils/article';
import Tag from './Tag';
import { useEffect, useState } from 'react';

const TagList = ({ categories }: any) => {
  if (!categories) return null;
  const [colors, setColors] = useState<string[]>([]);

  useEffect(() => {   
    const randomColors = categories.map(() => randomCategoryColorPicker());
    setColors(randomColors);
  }, [categories]);

  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((tag: any, index: any) => (
        <Tag color={colors[index]} name={tag.name} key={index} />
      ))}
    </div>
  );
}

export default TagList;

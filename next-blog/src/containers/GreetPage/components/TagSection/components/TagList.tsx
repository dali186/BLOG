import Tag from './Tag';

const TagList = ({ categories }: any) => {
  if (!categories) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((tag: any, index: any) => (
        <Tag name={tag.name} key={index} />
      ))}
    </div>
  );
}

export default TagList;

import Tag from './Tag';

const TagList = ({ tagColors }) => {
  
  return (
    <div className="flex flex-wrap gap-4">
      {tagColors.map((tag, index) => (
        <Tag color={tag.color} name={tag.label} key={index} />
      ))}
    </div>
  );
}

export default TagList;

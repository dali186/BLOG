import TagList from "./components/TagList";

const Category = () => {
    const title = "Cateogories";
    const tagColors = [
        { label: '진한 파스텔 핑크', color: 'bg-pink-400' },
        { label: '진한 파스텔 블루', color: 'bg-blue-300' },
        { label: '진한 파스텔 그린', color: 'bg-green-300' },
        { label: '진한 파스텔 옐로우', color: 'bg-yellow-300' },
        { label: '진한 파스텔 퍼플', color: 'bg-purple-300' },
        { label: '진한 파스텔 레드', color: 'bg-red-300' },
        { label: '진한 파스텔 티얼', color: 'bg-teal-300' },
      ];

    return (
        <div className="space-y-4 mb-3">
            <h2 className="text-3xl font-noto mb-4">{title}</h2>
            <TagList tagColors={tagColors}/>
        </div>
    )
}

export default Category;
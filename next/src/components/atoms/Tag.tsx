const Tag = ({ tagName }: { tagName: string }) => {
    const hashTagName = `#${tagName}`;

    return (
        <div className="center relative inline-block select-none rounded-lg bg-emerald-600 align-baseline font-dot text-xs py-0.5 px-1.5 uppercase leading-none text-white m-1
        md:text-sm md:py-1">
            <a href={`/articles/tags/${tagName}`}>{hashTagName}</a>
        </div>
    );
}

export default Tag;
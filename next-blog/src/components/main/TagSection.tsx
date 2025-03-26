import Tag from "@/components/atoms/Tag";
import { getTags } from "@/service/articleFetch";

const TagSection = async() => {
    const tags: string[] = await getTags();
    return(
        <div>
            <div className="font-noto text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl p-6 pt-1">
                <p># Tags</p>
            </div>
            <div className="p-6 pt-1 max-h-20 overflow-y-auto mb-5">
                <div className="flex flex-wrap space-x-2">
                    {tags.map((tag, index) => (
                    <Tag key={index} tagName={tag} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TagSection;
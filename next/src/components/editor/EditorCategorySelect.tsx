import { convertTree } from "@/lib/util/util";
import { getCategories } from "@/service/articleService";

interface selectedCategory {
    selectedCategory?: string;
}

const EditorCategorySelect = async({ selectedCategory }: selectedCategory) => {
    const categoryList = await getCategories();
    const categoryTreeList = convertTree(categoryList);

    return (
        <select
        name="category"
        id="category"
        className="block w-32 lg:w-auto px-4 py-2 bg-white border-2 border-gray-300  rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-800 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:focus:ring-teal-400 dark:focus:border-teal-400 transition-all ease-in-out font-dot"
        defaultValue={selectedCategory ?? ""}
    >
        <option value="" disabled>카테고리 선택</option>
        {categoryTreeList.map(tree => {
            if (tree.children?.length === 0) {
                return (
                    <option key={tree._id} value={tree.name}>
                        {tree.name}
                    </option>
                );
            } else {
                return (
                    <optgroup key={tree._id} label={tree.name}>
                        {tree.children?.map(child => 
                            <option key={child._id} value={child.name}>
                                {child.name}
                            </option>
                        )}
                    </optgroup>
                );
            }
        })}
    </select>
    )
}

export default EditorCategorySelect;
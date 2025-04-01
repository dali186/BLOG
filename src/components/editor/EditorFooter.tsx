import { convertTree } from "@/lib/util/util";
import { getCategories } from "@/service/articleFetch";
import { Category } from "@/types/types";

interface TreeCategory extends Category {
  children?: TreeCategory[];
}

const EditorFooter = async() => {
    const categoryList = await getCategories();
    const categoryTreeList = convertTree(categoryList);
    categoryTreeList.map(cate => {
        console.log(cate);
    })

    return (
        <footer className="fixed bottom-0 left-0 w-full bg-gray-100 text-white p-4 flex justify-between items-center">
            <select
                name="category"
                id="category"
                className="block px-4 py-2 bg-white border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-800 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:focus:ring-teal-400 dark:focus:border-teal-400 transition-all ease-in-out font-dot"
                defaultValue=""
                required
            >
                <option value="" disabled>카테고리 선택</option>
                {categoryTreeList.map(tree => {
                    if (tree.children?.length === 0) {
                        return (
                            <option key={tree._id} value={tree._id}>
                                {tree.name}
                            </option>
                        );
                    } else {
                        return (
                            <optgroup key={tree._id} label={tree.name}>
                                {tree.children?.map(child => 
                                    <option key={child._id} value={child._id}>
                                        {child.name}
                                    </option>
                                )}
                            </optgroup>
                        );
                    }
                })}
            </select>

            <div className="flex gap-4">
                <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-full border border-[#000000] px-6 py-2 text-sm font-semibold text-[#000000] transition-all hover:rotate-3 hover:scale-105 hover:shadow-lg active:scale-95 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none font-dot"
                >
                    임시저장
                </button>
                <button
                    className="inline-flex items-center gap-2 rounded-full border border-[#000000] px-6 py-2 text-sm font-semibold text-[#000000] transition-all hover:bg-[#000000] hover:text-white hover:shadow-lg active:scale-95 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none font-dot"
                >
                    저장
                </button>
            </div>
        </footer>
            )
}

export default EditorFooter;
import { convertTree } from "@/lib/util/util";
import { getCategories } from "@/service/articleFetch";
import { Category } from "@/types/types";
import { ReactNode } from "react";

interface TreeCategory extends Category {
  children?: TreeCategory[];
}

const renderCategoryList = ( category: TreeCategory): ReactNode => {

  return(
    <div className="mt-2" key={category._id}>
      <input type="checkbox" id={`toggle-${category._id}`} className="peer hidden" />
      <label htmlFor={`toggle-${category._id}`} className="flex items-center gap-2 cursor-pointer">
        <span className="peer-checked:roate-90 transition-transform">{(category.children && category.children.length > 0) ?
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>        
         : 
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
          </svg>
          }
        </span>
        <span className="font-dot pt-1">{category.children?.length == 0 ? (<a href={`/articles/category/${category.name}`}>{category.name}</a>) : (category.name)}</span>
      </label>
      <div className="max-h-0 peer-checked:max-h-40 overflow-hidden transition-all duration-300 pl-6">
        {category.children && category.children.length > 0 && (
          <div className="pl-4">
            {category.children.map((child) => renderCategoryList(child))}
          </div>
        )}
      </div>
    </div>
  );
}

const CategorySection = async() => {
  const categoryList: Category[] = await getCategories();
  const categoryTree = convertTree(categoryList);
  return (
    <div>
      <div className="font-noto text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl p-6 pt-1">
        <p># Category</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full w-full pl-6 pb-6 rounded-lg">
        {categoryTree.map((category) => renderCategoryList(category))}
      </div>
    </div>
  );
};

export default CategorySection;

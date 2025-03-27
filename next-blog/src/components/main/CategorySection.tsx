import { getCategories } from "@/service/articleFetch";
import { Category } from "@/types/types";
import { ReactNode } from "react";

interface TreeCategory extends Category {
  children?: TreeCategory[];
}

const convertTree = (categoryList: Category[]) => {
  const categoryMap = new Map<number,TreeCategory>();
  const root: TreeCategory[] = [];

  // category를 복사 및 children 배열 속성 추가
  categoryList.forEach(category => {
    categoryMap.set(category._id, { ...category, children: [] });
  });

  categoryList.forEach(category => {
    if (category.parentId == null) {
      root.push(categoryMap.get(category._id)!);
    } else {
      categoryMap.get(category.parentId)!.children!.push(categoryMap.get(category._id)!);
    }
  });

  return root;
}

const renderCategoryList = (category: TreeCategory): ReactNode => {

  return(
    <div key={category._id}>
      <input type="checkbox" id={`toggle-${category._id}`} className="peer hidden" />
      <label htmlFor={`toggle-${category._id}`} className="flex items-center gap-2 cursor-pointer">
        <span className="peer-checked:roate-90 transition-transform">▶</span>
        <span className="font-dot">{category.name}</span>
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full w-full p-4 rounded-lg p-6">
        {categoryTree.map((category) => renderCategoryList(category))}
      </div>
    </div>
  );
};

export default CategorySection;

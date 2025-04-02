import { Category } from "@/types/types";

interface TreeCategory extends Category {
    children?: TreeCategory[];
  }

/* 카테고리를 트리구조로 변환해주는 메소드드 */
export const convertTree = (categoryList: Category[]) => {
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

/* 태그 string을 배열로 변환하는 메서드 */
export const separateTags = (tags: string) => {
  const tagList = tags.split(',').map(tag => tag.trim());

  return tagList;
}
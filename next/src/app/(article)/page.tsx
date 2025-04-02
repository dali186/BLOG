import ArticleSection from "@/components/main/ArticleSection";
import CategorySection from "@/components/main/CategorySection";
import TagSection from "@/components/main/TagSection";


const ArticleHome = async() => {  
  return (
    <div className='p-6 pt-1'>
      <TagSection />
      <CategorySection />
      <ArticleSection />
    </div>
  );
}

export default ArticleHome;

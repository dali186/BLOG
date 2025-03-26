import VerticalArticleCardList from "@/components/articles/VerticalArticleCardList";
import Tag from "@/components/atoms/Tag";
import Loader from "@/components/Loader";
import { getAllAtricles, getTags } from "@/service/articleFetch";
import { Article } from "@/types/types";
import { Suspense } from "react";

const Home = async() => {

  const articles: Article[] = await getAllAtricles();
  const tags: string[] = await getTags();
  
  return (
    <div className='p-6 pt-1'>
      <div>
      </div>
      <div>
        Series
      </div>
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
      <div>
        <div className="font-noto text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl p-6 pt-1">
          <p># Recent Articles</p>
        </div>
        <div>
          <Suspense fallback={<Loader />}>
              <VerticalArticleCardList articles={articles} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default Home;

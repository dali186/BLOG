import Category from "@/containers/GreetPage/components/Category/Category";
import HorizontalArticleList from "@/containers/GreetPage/components/HorizontalArticleList/HorizontalArticleList";
import LinearArticleList from "@/containers/GreetPage/components/LinearArticleList/LinearArticleList";

const Home = () => {
  return (
    <>
      <Category />
      <Category />
      <HorizontalArticleList />
      <LinearArticleList />
    </>
  );
}

export default Home;

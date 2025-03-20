import TagSection from "@/containers/GreetPage/components/TagSection/TagSection";
import HorizontalArticleList from "@/containers/GreetPage/components/HorizontalArticleList/HorizontalArticleList";
import LinearArticleList from "@/containers/GreetPage/components/LinearArticleList/LinearArticleList";

const Home = () => {
  return (
    <>
      <TagSection title="Categories"/>
      {/* <TagSection title="Tags"/> */}
      <HorizontalArticleList />
      <LinearArticleList />
    </>
  );
}

export default Home;

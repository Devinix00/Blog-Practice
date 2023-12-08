import getPostsAllApi from "@/api/getPostsAll/getPostsAllApi";
import Footer from "@/components/organisms/footer/Footer";
import Header from "@/components/organisms/header/Header";
import HomeTemplate from "@/components/templates/homeTemplate/HomeTemplate";

export default async function Home() {
  const data = await getPostsAllApi();
  const posts = data.data;

  return (
    <>
      <div className="body">
        <div className="mainContainer">
          <Header />
          <HomeTemplate posts={posts} />
        </div>
        <Footer />
      </div>
    </>
  );
}

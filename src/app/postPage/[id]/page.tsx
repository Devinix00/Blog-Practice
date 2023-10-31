import Footer from "@/components/organisms/footer/Footer";
import Header from "@/components/organisms/header/Header";
import PostTemplate from "@/components/templates/postTemplate/PostTemplate";

function PostPage(): JSX.Element {
  return (
    <div className="body">
      <div className="mainContainer">
        <Header />
        <PostTemplate />
      </div>
      <Footer />
    </div>
  );
}

export default PostPage;

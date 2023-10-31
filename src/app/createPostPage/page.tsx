import Footer from "@/components/organisms/footer/Footer";
import Header from "@/components/organisms/header/Header";
import CreatePostTemplate from "@/components/templates/createPostTemplate/CreatePostTemplate";

function CreatePostPage(): JSX.Element {
  return (
    <div className="body">
      <div className="mainContainer">
        <Header />
        <CreatePostTemplate />
      </div>
      <Footer />
    </div>
  );
}

export default CreatePostPage;

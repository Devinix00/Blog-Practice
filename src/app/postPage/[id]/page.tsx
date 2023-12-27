import getCommentsApi from "@/api/getComments/getCommentsAPi";
import getIndividualPost from "@/api/getIndividualPost/getIndividualPost";
import Footer from "@/components/organisms/footer/Footer";
import Header from "@/components/organisms/header/Header";
import PostTemplate from "@/components/templates/postTemplate/PostTemplate";

async function PostPage({ params }: { params: { id: string } }) {
  const data = await getIndividualPost(params.id);
  const post = data.data;

  const commentsData = await getCommentsApi(post.id);
  const comments = commentsData.data;

  return (
    <div className="body">
      <div className="mainContainer">
        <Header />
        <PostTemplate post={post} comments={comments} />
      </div>
      <Footer />
    </div>
  );
}

export default PostPage;

import PostMain from "@/components/organisms/postMain/PostMain";

interface IProps {
  post: IPost;
  comments: IPost[];
}

function PostTemplate({ post, comments }: IProps): JSX.Element {
  return (
    <>
      <PostMain post={post} comments={comments} />
    </>
  );
}

export default PostTemplate;

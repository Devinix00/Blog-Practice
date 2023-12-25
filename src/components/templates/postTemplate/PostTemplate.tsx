import PostMain from "@/components/organisms/postMain/PostMain";

interface IProps {
  post: IPost;
}

function PostTemplate({ post }: IProps): JSX.Element {
  return (
    <>
      <PostMain post={post} />
    </>
  );
}

export default PostTemplate;

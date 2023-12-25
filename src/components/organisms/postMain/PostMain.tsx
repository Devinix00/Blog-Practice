import PostTitle from "@/components/molecules/postTitle/PostTitle";
import styles from "./PostMain.module.scss";
import PostContent from "@/components/molecules/postContent/PostContent";
import PostReaction from "../postReaction/PostReaction";

interface IProps {
  post: IPost;
}

function PostMain({ post }: IProps): JSX.Element {
  return (
    <>
      <div className={styles.container}>
        <PostTitle post={post} />
        <PostContent post={post} />
        <PostReaction post={post} />
      </div>
    </>
  );
}

export default PostMain;

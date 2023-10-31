import PostTitle from "@/components/molecules/postTitle/PostTitle";
import styles from "./PostMain.module.scss";
import PostContent from "@/components/molecules/postContent/PostContent";
import PostReaction from "../postReaction/PostReaction";

function PostMain(): JSX.Element {
  return (
    <>
      <div className={styles.container}>
        <PostTitle />
        <PostContent />
        <PostReaction />
      </div>
    </>
  );
}

export default PostMain;

import PostLink from "@/components/common/postLink/PostLink";
import styles from "./PostManagement.module.scss";

function PostManagement(): JSX.Element {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <div className={styles.text}>글 관리</div>
        </div>
        <PostLink props="글 쓰기" type="user" />
      </div>
    </>
  );
}

export default PostManagement;

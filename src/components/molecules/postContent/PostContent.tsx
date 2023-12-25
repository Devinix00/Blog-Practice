import styles from "./PostContent.module.scss";

interface IProps {
  post: IPost;
}

function PostContent({ post }: IProps): JSX.Element {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>{post.content}</div>
      </div>
    </>
  );
}

export default PostContent;

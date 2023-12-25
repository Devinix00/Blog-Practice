import styles from "./PostTitle.module.scss";

interface IProps {
  post: IPost;
}

function PostTitle({ post }: IProps): JSX.Element {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>{post.title}</div>
        <div className={styles.date}>{post.createdAt}</div>
      </div>
    </>
  );
}

export default PostTitle;

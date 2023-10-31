import styles from "./PostTitle.module.scss";

function PostTitle(): JSX.Element {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>제목</div>
        <div className={styles.date}>2023-10-31</div>
      </div>
    </>
  );
}

export default PostTitle;

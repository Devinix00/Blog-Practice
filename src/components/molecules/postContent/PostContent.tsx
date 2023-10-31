import styles from "./PostContent.module.scss";

function PostContent(): JSX.Element {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}></div>
      </div>
    </>
  );
}

export default PostContent;

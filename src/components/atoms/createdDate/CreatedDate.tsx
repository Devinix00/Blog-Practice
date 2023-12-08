import styles from "./CreatedDate.module.scss";

interface IProps {
  post: IPost;
}

function CreatedDate({ post }: IProps): JSX.Element {
  return (
    <>
      <div className={styles.createdDate}>{post.createdAt}</div>
    </>
  );
}

export default CreatedDate;

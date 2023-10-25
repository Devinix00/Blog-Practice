import styles from "./Comment.module.scss";
import commentImage from "./image/375d22919c43603090b3cf0c0d11c462.png";
import Image from "next/image";

function Comment(): JSX.Element {
  return (
    <>
      <div className={styles.container}>
        <Image
          alt="comment"
          src={commentImage}
          className={styles.commentImage}
        />
        <div className={styles.number}>0</div>
      </div>
    </>
  );
}

export default Comment;

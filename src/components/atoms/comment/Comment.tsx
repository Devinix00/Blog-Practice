import styles from "./Comment.module.scss";
import commentImage from "./image/375d22919c43603090b3cf0c0d11c462.png";
import Image from "next/image";

interface IProps {
  post?: IPost;
}

function Comment({ post }: IProps): JSX.Element {
  const numberOfComments = post?.replyResponses.length;

  return (
    <>
      <div className={styles.container}>
        <Image
          alt="comment"
          src={commentImage}
          className={styles.commentImage}
        />
        <div className={styles.number}>{numberOfComments}</div>
      </div>
    </>
  );
}

export default Comment;

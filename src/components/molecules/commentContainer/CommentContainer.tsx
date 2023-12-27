import styles from "./CommentContainer.module.scss";
import CommentUserInfo from "../commentUserInfo/CommentUserInfo";

interface IProps {
  comment: IPost;
}

function CommentContainer({ comment }: IProps): JSX.Element {
  return (
    <>
      <div className={styles.container}>
        <CommentUserInfo comment={comment} />
        <div className={styles.content}>{comment.content}</div>
        <div className={styles.repliesContainer}>
          <div className={styles.replies}>답글 보기</div>
        </div>
      </div>
    </>
  );
}

export default CommentContainer;

import UserImage from "@/components/atoms/userImage/UserImage";
import styles from "./CommentUserInfo.module.scss";

interface IProps {
  comment: IPost;
}

function CommentUserInfo({ comment }: IProps): JSX.Element {
  return (
    <>
      <div className={styles.container}>
        <UserImage type="postPageComment" />
        <div className={styles.nameAndDate}>
          <div className={styles.nickName}>
            {comment.userInfoResponse.nickName}
          </div>
          <div className={styles.date}>{comment.createdAt}</div>
        </div>
      </div>
    </>
  );
}

export default CommentUserInfo;

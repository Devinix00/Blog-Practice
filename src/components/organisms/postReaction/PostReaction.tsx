import Like from "@/components/atoms/like/Like";
import styles from "./PosstReaction.module.scss";
import UserImage from "@/components/atoms/userImage/UserImage";
import { Button } from "@mui/material";

function PostReaction(): JSX.Element {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.likeContainer}>
          <div className={styles.like}>
            <Like type="postPage" />
          </div>
        </div>
        <div className={styles.commentContainer}>
          <UserImage type="postPage" />
          <div className={styles.textareaAndButtonContainer}>
            <textarea
              placeholder="내용을 입력해주세요..."
              className={styles.textarea}
            />
            <div className={styles.buttonContainer}>
              <Button variant="contained" className={styles.uploadButton}>
                등록
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostReaction;

"use client";

import styles from "./CommentContainer.module.scss";
import CommentUserInfo from "../commentUserInfo/CommentUserInfo";
import useDeleteComment from "@/hooks/useDeleteComment/useDeleteComment";
import useUserIdStore from "@/stores/useUserIdStore/useUserIdStore";
import { useEffect, useState } from "react";

interface IProps {
  comment: IPost;
}

function CommentContainer({ comment }: IProps): JSX.Element {
  const [isShowDelete, setIsShowDelete] = useState<boolean>(false);
  const idOfUser = comment.userInfoResponse.id;
  const { userId } = useUserIdStore();
  const { deleteComment } = useDeleteComment();
  useEffect(() => {
    if (idOfUser === userId) {
      setIsShowDelete(true);
    } else {
      setIsShowDelete(false);
    }
  }, [idOfUser, userId]);

  return (
    <>
      <div className={styles.container}>
        <CommentUserInfo comment={comment} />
        <div className={styles.content}>{comment.content}</div>
        <div className={styles.repliesContainer}>
          <div className={styles.replies}>답글 보기</div>
          {isShowDelete && (
            <div
              onClick={() => {
                deleteComment(comment.id);
              }}
              className={styles.deleteComment}
            >
              삭제
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default CommentContainer;

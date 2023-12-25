"use client";

import Like from "@/components/atoms/like/Like";
import styles from "./PosstReaction.module.scss";
import UserImage from "@/components/atoms/userImage/UserImage";
import CommentForm from "../commentForm/CommentForm";

interface IProps {
  post: IPost;
}

function PostReaction({ post }: IProps): JSX.Element {
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
          <CommentForm post={post} />
        </div>
      </div>
    </>
  );
}

export default PostReaction;

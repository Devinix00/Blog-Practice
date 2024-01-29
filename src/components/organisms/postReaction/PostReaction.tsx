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
            <p className={styles.numberOfLikes}>{post.likeResponses.length}</p>
            <Like type="postPage" post={post} />
          </div>
          <div className={styles.numberOfComments}>
            {post.replyResponses.length}개의 댓글
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

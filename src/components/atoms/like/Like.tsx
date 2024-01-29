import useLike from "@/hooks/useLike/useLike";
import styles from "./Like.module.scss";
import likeImage from "./image/c5fe178765f6d2768d7ee21af89c70c2.png";
import Image from "next/image";
import useUserIdStore from "@/stores/useUserIdStore/useUserIdStore";
import { useEffect, useState } from "react";

interface IProps {
  post: IPost;
  type?: "postPage";
}

function Like({ type, post }: IProps): JSX.Element {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const { handleLike } = useLike({ setIsLiked, isLiked, post });
  const { userId } = useUserIdStore();

  useEffect(() => {
    setIsLiked(post?.likeResponses.some((like) => like.userId === userId));
  }, [post, userId]);

  const likeImageClass = `${styles.likeImage} ${isLiked ? styles.liked : null}`;

  return (
    <>
      <Image
        alt="like"
        src={likeImage}
        onClick={handleLike}
        className={likeImageClass}
      />
      {type !== "postPage" && (
        <div className={styles.number}>{post?.likeResponses.length}</div>
      )}
    </>
  );
}

export default Like;

import useLike from "@/hooks/useLike/useLike";
import styles from "./Like.module.scss";
import likeImage from "./image/c5fe178765f6d2768d7ee21af89c70c2.png";
import Image from "next/image";

interface IProps {
  post: IPost;
  type?: "postPage";
}

function Like({ type, post }: IProps): JSX.Element {
  const { handleClickLike } = useLike();
  return (
    <>
      <Image
        alt="like"
        src={likeImage}
        onClick={() => {
          handleClickLike(post?.id);
        }}
        className={styles.likeImage}
      />
      {type !== "postPage" && (
        <div className={styles.number}>{post.likeResponses.length}</div>
      )}
    </>
  );
}

export default Like;

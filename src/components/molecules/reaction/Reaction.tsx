import Like from "@/components/atoms/like/Like";
import styles from "./Reaction.module.scss";
import Comment from "@/components/atoms/comment/Comment";

interface IProps {
  post: IPost;
  children?: React.ReactNode;
}

function Reaction({ post, children }: IProps): JSX.Element {
  return (
    <>
      <div className={styles.container}>
        <Like />
        <Comment post={post} />
        {children}
      </div>
    </>
  );
}

export default Reaction;

import Like from "@/components/atoms/like/Like";
import styles from "./Reaction.module.scss";
import Comment from "@/components/atoms/comment/Comment";

function Reaction(): JSX.Element {
  return (
    <>
      <div className={styles.container}>
        <Like />
        <Comment />
      </div>
    </>
  );
}

export default Reaction;

import Like from "@/components/atoms/like/Like";
import styles from "./Reaction.module.scss";
import Comment from "@/components/atoms/comment/Comment";

interface IProps {
  children: React.ReactNode;
}

function Reaction({ children }: IProps): JSX.Element {
  return (
    <>
      <div className={styles.container}>
        <Like />
        <Comment />
        {children}
      </div>
    </>
  );
}

export default Reaction;

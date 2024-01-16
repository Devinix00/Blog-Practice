import styles from "./Comments.module.scss";
import CommentContainer from "@/components/molecules/commentContainer/CommentContainer";

interface IProps {
  comments: IPost[];
}

function Comments({ comments }: IProps): JSX.Element {
  return (
    <>
      <div className={styles.container}>
        {comments.map((comment, index) => {
          return <CommentContainer comment={comment} key={index} />;
        })}
      </div>
    </>
  );
}

export default Comments;

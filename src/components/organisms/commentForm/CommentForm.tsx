import { Button } from "@mui/material";
import styles from "./CommentForm.module.scss";
import useUserIdStore from "@/stores/useUserIdStore/useUserIdStore";
import { useState } from "react";
import useAddComment from "@/hooks/useAddComent/useAddComent";
import usePressEnterFetch from "@/hooks/usePressEnterFetch/usePressEnterFetch";

interface IProps {
  post: IPost;
}

function CommentForm({ post }: IProps): JSX.Element {
  const postId = post.id;
  const { userId } = useUserIdStore();
  const [inputValues, setInputValues] = useState({ content: "" });
  const { handleSubmit, onChange } = useAddComment({
    postId,
    userId,
    inputValues,
    setInputValues,
  });

  const { handlePressEnterFetch } = usePressEnterFetch({ handleSubmit });
  return (
    <>
      <form onSubmit={handleSubmit} className={styles.container}>
        <textarea
          placeholder="내용을 입력해주세요..."
          name="content"
          value={inputValues.content}
          className={styles.textarea}
          onChange={onChange}
          onKeyDown={handlePressEnterFetch}
        />
        <div className={styles.buttonContainer}>
          <Button
            type="submit"
            variant="contained"
            className={styles.uploadButton}
          >
            등록
          </Button>
        </div>
      </form>
    </>
  );
}

export default CommentForm;

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
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const postId = post.id.toString();
  const { userId } = useUserIdStore();
  const [inputValues, setInputValues] = useState({ content: "" });
  const { handleSubmit, onChange } = useAddComment({
    postId,
    userId,
    inputValues,
    setInputValues,
    setIsSubmitting,
  });

  const { handlePressEnterFetch } = usePressEnterFetch({
    handleSubmit,
    isSubmitting,
  });

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

import styles from "./CreateFormTitleContainer.module.scss";
import { Button } from "@mui/material";

function CreateFormTitleContainer(): JSX.Element {
  return (
    <>
      <div className={styles.container}>
        <label className={styles.title}>제목</label>
        <input
          type="text"
          placeholder="제목을 입력해주세요..."
          className={styles.input}
        />
        <label className={styles.title}>내용</label>
        <div className={styles.textareaContainer}>
          <textarea
            placeholder="내용을 입력해주세요..."
            className={styles.textarea}
          />
        </div>
        <div className={styles.inputFileAndButtonContainer}>
          <input type="file" />
          <Button variant="contained" className={styles.uploadButton}>
            업로드
          </Button>
        </div>
      </div>
    </>
  );
}

export default CreateFormTitleContainer;

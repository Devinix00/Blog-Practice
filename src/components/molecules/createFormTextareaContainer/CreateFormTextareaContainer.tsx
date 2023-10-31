import styles from "./CreateFormTextareaContainer.module.scss";

function CreateFormTextareaContainer(): JSX.Element {
  return (
    <>
      <div className={styles.container}>
        <label className={styles.title}>내용</label>
        <div className={styles.textareaContainer}>
          <textarea
            placeholder="내용을 입력해주세요..."
            className={styles.textarea}
          />
        </div>
      </div>
    </>
  );
}

export default CreateFormTextareaContainer;

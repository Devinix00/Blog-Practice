import styles from "./CreateFormTitleContainer.module.scss";

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
      </div>
    </>
  );
}

export default CreateFormTitleContainer;

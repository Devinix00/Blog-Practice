import styles from "./CreateFormTextareaContainer.module.scss";

interface IProps {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

function CreateFormTextareaContainer({
  name,
  value,
  onChange,
}: IProps): JSX.Element {
  return (
    <>
      <div className={styles.container}>
        <label className={styles.title}>내용</label>
        <div className={styles.textareaContainer}>
          <textarea
            name={name}
            value={value}
            placeholder="내용을 입력해주세요..."
            onChange={onChange}
            className={styles.textarea}
          />
        </div>
      </div>
    </>
  );
}

export default CreateFormTextareaContainer;

import styles from "./CreateFormTitleContainer.module.scss";

interface IProps {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function CreateFormTitleContainer({
  name,
  value,
  onChange,
}: IProps): JSX.Element {
  return (
    <>
      <div className={styles.container}>
        <label className={styles.title}>제목</label>
        <input
          name={name}
          type="text"
          placeholder="제목을 입력해주세요..."
          value={value}
          onChange={onChange}
          className={styles.input}
        />
      </div>
    </>
  );
}

export default CreateFormTitleContainer;

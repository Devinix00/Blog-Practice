import styles from "./UpdateInput.module.scss";

interface IProps {
  inputType: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function UpdateInput({
  inputType,
  name,
  value,
  onChange,
}: IProps): JSX.Element {
  return (
    <>
      <input
        type={inputType}
        name={name}
        value={value}
        onChange={onChange}
        className={styles.input}
      />
    </>
  );
}

export default UpdateInput;

import styles from "./UpdateButton.module.scss";

interface IProps {
  type: "button" | "submit" | "reset" | undefined;
  text: string;
}

function UpdateButton({ type, text }: IProps): JSX.Element {
  return (
    <button type={type} className={styles.updateButton}>
      {text}
    </button>
  );
}

export default UpdateButton;

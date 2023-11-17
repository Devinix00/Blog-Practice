import styles from "./ConfrimMessage.module.scss";

interface IProps {
  confirmMessage: string;
}

function ConfirmMessage({ confirmMessage }: IProps): JSX.Element {
  return <div className={styles.confirmMessage}>{confirmMessage}</div>;
}

export default ConfirmMessage;

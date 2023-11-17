import styles from "./UpdateLabel.module.scss";

interface IProps {
  labelText: string;
}

function UpdateLabel({ labelText }: IProps): JSX.Element {
  return <label className={styles.labelText}>{labelText}</label>;
}

export default UpdateLabel;

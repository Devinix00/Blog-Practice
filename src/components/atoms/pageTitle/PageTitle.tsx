import styles from "./PageTitle.module.scss";

interface IProps {
  text: string;
}

function PageTitle({ text }: IProps): JSX.Element {
  return (
    <>
      <div className={styles.text}>{text}</div>
    </>
  );
}

export default PageTitle;

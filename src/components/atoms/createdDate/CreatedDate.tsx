import styles from "./CreatedDate.module.scss";

interface IProps {
  content: IContent;
}

function CreatedDate({ content }: IProps): JSX.Element {
  return (
    <>
      <div className={styles.createdDate}>{content.date}</div>
    </>
  );
}

export default CreatedDate;

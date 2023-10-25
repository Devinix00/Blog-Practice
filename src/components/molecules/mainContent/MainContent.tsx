import styles from "./MainContent.module.scss";

interface IProps {
  content: IContent;
}

function MainContent({ content }: IProps): JSX.Element {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>{content.title}</div>
        <div className={styles.content}>{content.content}</div>
      </div>
    </>
  );
}

export default MainContent;

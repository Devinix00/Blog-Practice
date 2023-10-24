import styles from "./Content.module.scss";

interface IProps {
  content: IContent;
}

interface IContent {
  id: number;
  userName: string;
  date: string;
}

function ContentContainer({ content }: IProps): JSX.Element {
  return (
    <>
      <div className={styles.container}>{content.id}</div>
    </>
  );
}

export default ContentContainer;

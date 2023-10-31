import styles from "./MainContent.module.scss";
import Link from "next/link";

interface IProps {
  content: IContent;
}

function MainContent({ content }: IProps): JSX.Element {
  const dynamicPath = `/postPage/${content.id}`;

  return (
    <>
      <div className={styles.container}>
        <Link href="/postPage/[postId]" as={dynamicPath}>
          <div className={styles.title}>{content.title}</div>
          <div className={styles.content}>{content.content}</div>
        </Link>
      </div>
    </>
  );
}

export default MainContent;

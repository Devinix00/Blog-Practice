import styles from "./MainContent.module.scss";
import Link from "next/link";

interface IProps {
  post: IPost;
}

function MainContent({ post }: IProps): JSX.Element {
  const dynamicPath = `/postPage/${post.id}`;

  return (
    <>
      <div className={styles.container}>
        <Link
          href="/postPage/[postId]"
          as={dynamicPath}
          className={styles.title}
        >
          {post.title}
        </Link>
        <div className={styles.content}>{post.content}</div>
      </div>
    </>
  );
}

export default MainContent;

import styles from "./PostLink.module.scss";
import Link from "next/link";
import Image from "next/image";
import postImage from "./image/521cdd3671c2ba7a4dff742037c9af8d.png";

interface IProps {
  props: string;
  type: string;
}

function PostLink({ props, type }: IProps): JSX.Element {
  let postLinkClass;
  if (type === "header") {
    postLinkClass = styles.headerContainer;
  } else if (type === "user") {
    postLinkClass = styles.userContainer;
  }
  return (
    <>
      <div className={postLinkClass}>
        <Link href="/postPage" className={styles.linkContainer}>
          <Image alt="postImage" src={postImage} className={styles.image} />
          <div className={styles.write}>{props}</div>
        </Link>
      </div>
    </>
  );
}

export default PostLink;

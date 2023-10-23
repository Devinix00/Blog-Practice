import styles from "./PostLink.module.scss";
import Link from "next/link";
import Image from "next/image";
import postImage from "./image/521cdd3671c2ba7a4dff742037c9af8d.png";

interface IProps {
  props: string;
}

function PostLink({ props }: IProps): JSX.Element {
  return (
    <>
      <div className={styles.container}>
        <Link href="/postPage" className={styles.linkContainer}>
          <Image alt="postImage" src={postImage} className={styles.image} />
          <div className={styles.write}>{props}</div>
        </Link>
      </div>
    </>
  );
}

export default PostLink;

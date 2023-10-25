import styles from "./Like.module.scss";
import likeImage from "./image/c5fe178765f6d2768d7ee21af89c70c2.png";
import Image from "next/image";

function Like(): JSX.Element {
  return (
    <>
      <Image alt="like" src={likeImage} className={styles.likeImage} />
      <div className={styles.number}>0</div>
    </>
  );
}

export default Like;

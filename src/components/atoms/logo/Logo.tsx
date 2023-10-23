import styles from "./Logo.module.scss";
import Link from "next/link";

function Logo(): JSX.Element {
  return (
    <>
      <div className={styles.container}>
        <Link href="/">
          <div className={styles.logo}>Blog</div>
        </Link>
      </div>
    </>
  );
}

export default Logo;

import styles from "./Logo.module.scss";
import Link from "next/link";

interface IProps {
  type: "header" | "footer";
}

function Logo({ type }: IProps): JSX.Element {
  let logoClass;
  if (type === "header") {
    logoClass = styles.headerLogo;
  } else if (type === "footer") {
    logoClass = styles.footerLogo;
  }

  return (
    <>
      <div className={styles.container}>
        <Link href="/">
          <div className={logoClass}>Blog</div>
        </Link>
      </div>
    </>
  );
}

export default Logo;

import styles from "./UserButton.module.scss";
import Link from "next/link";
import Image from "next/image";
import userLogo from "./image/a926d6e71851a35cbdd3c0ed16233b01.png";

function UserButton(): JSX.Element {
  return (
    <>
      <div className={styles.container}>
        <Link href="/userPage" className={styles.link}>
          <Image alt="userLogo" src={userLogo} className={styles.userLogo} />
        </Link>
      </div>
    </>
  );
}

export default UserButton;

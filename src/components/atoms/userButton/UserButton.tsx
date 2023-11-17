import styles from "./UserButton.module.scss";
import Link from "next/link";
import Image from "next/image";
import UserImage from "../userImage/UserImage";

function UserButton(): JSX.Element {
  return (
    <>
      <div className={styles.container}>
        <Link href="/userPage" className={styles.link}>
          {/* <Image alt="userLogo" src={userLogo} className={styles.userLogo} /> */}
          <UserImage type="header" />
        </Link>
      </div>
    </>
  );
}

export default UserButton;

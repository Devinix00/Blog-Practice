import styles from "./UserImage.module.scss";
import Image from "next/image";

function UserImage(): JSX.Element {
  return (
    <>
      <div className={styles.container}>
        {/* <Image alt="user image" src={""}></Image> */}
      </div>
    </>
  );
}

export default UserImage;

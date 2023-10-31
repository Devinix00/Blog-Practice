import styles from "./UserImage.module.scss";
import Image from "next/image";

interface IProps {
  type: string;
}

function UserImage({ type }: IProps): JSX.Element {
  let imageClass;
  if (type === "mainPage") {
    imageClass = styles.mainPageImage;
  } else if (type === "userPage") {
    imageClass = styles.userPageImage;
  } else if (type === "postPage") {
    imageClass = styles.postPageImage;
  }

  return (
    <>
      <div className={imageClass}>
        {/* <Image alt="user image" src={""}></Image> */}
      </div>
    </>
  );
}

export default UserImage;

import styles from "./UserImage.module.scss";
import Image from "next/image";
import PersonIcon from "@mui/icons-material/Person";

interface IProps {
  type: string;
}

function UserImage({ type }: IProps): JSX.Element {
  const imageClassMap: { [key: string]: string } = {
    mainPage: styles.mainPageImage,
    userPage: styles.userPageImage,
    postPage: styles.postPageImage,
    updateUserPage: styles.updateUserImage,
    signUpPage: styles.signUpPageImage,
    header: styles.headerImage,
    postPageComment: styles.postPageCommentImage,
  };

  const imageClass = imageClassMap[type];

  return (
    <>
      <div className={imageClass}>
        <PersonIcon className={styles.userLogo} />
        {/* <Image alt="user image" src={""}></Image> */}
      </div>
    </>
  );
}

export default UserImage;

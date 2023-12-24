import UserImage from "@/components/atoms/userImage/UserImage";
import styles from "./UserImgName.module.scss";
import UserName from "@/components/atoms/userName/UserName";

interface IProps {
  type: string;
}

function UserImgName({ type }: IProps): JSX.Element {
  return (
    <>
      <div className={styles.userImageContainer}>
        <div className={styles.userImageAndName}>
          <UserImage type={type} />
          <div className={styles.userNameContainer}>
            <UserName type={type} />
          </div>
        </div>
      </div>
    </>
  );
}

export default UserImgName;

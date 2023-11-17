import UserImage from "@/components/atoms/userImage/UserImage";
import styles from "./UserImgName.module.scss";
import UserName from "@/components/atoms/userName/UserName";

interface IProps {
  type: string;
}

function UserImgName({ type }: IProps): JSX.Element {
  const content = {
    id: 1,
    userName: "김범수",
    title: "Next.Js 13",
    date: "2023-10-30",
    content: "",
  };

  return (
    <>
      <div className={styles.userImageContainer}>
        <div className={styles.userImageAndName}>
          <UserImage type={type} />
          <div className={styles.userNameContainer}>
            <UserName content={content} type={type} />
          </div>
        </div>
      </div>
    </>
  );
}

export default UserImgName;

import styles from "./UserName.module.scss";

interface IProps {
  post: IPost;
  type?: string;
}

function UserName({ post, type }: IProps): JSX.Element {
  const userNameClass = `${styles.userName} ${
    type === "updateUserPage" ? styles.updateUser : null
  }`;

  return (
    <>
      <div className={userNameClass}>{post?.userInfoResponse.nickName}</div>
    </>
  );
}

export default UserName;

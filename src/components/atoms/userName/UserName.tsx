"use client";

import useUserNickNameStore from "@/stores/useUserNickNameStore/useUserNickNameStore";
import styles from "./UserName.module.scss";

interface IProps {
  post?: IPost;
  type?: string;
}

function UserName({ post, type }: IProps): JSX.Element {
  const { userNickName } = useUserNickNameStore();
  const userNameClass = `${styles.userName} ${
    type === "updateUserPage" ? styles.updateUser : null
  }`;

  return (
    <>
      <div className={userNameClass}>{post?.userInfoResponse.nickName}</div>
      {type === "userPage" ? (
        <div className={userNameClass}>{userNickName}</div>
      ) : null}
    </>
  );
}

export default UserName;

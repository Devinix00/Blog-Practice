"use client";

import useUserNickNameStore from "@/stores/useUserNickNameStore/useUserNickNameStore";
import styles from "./UserName.module.scss";

interface IProps {
  post?: IPost;
  type?: string;
}

function UserName({ post, type }: IProps): JSX.Element {
  const { userNickName } = useUserNickNameStore();

  return (
    <>
      <div className={styles.userName}>{post?.userInfoResponse.nickName}</div>
      {type === "userPage" ? (
        <div className={styles.userName}>{userNickName}</div>
      ) : null}
    </>
  );
}

export default UserName;

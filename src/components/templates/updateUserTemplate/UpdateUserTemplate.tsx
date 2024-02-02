"use client";

import UserImage from "@/components/atoms/userImage/UserImage";
import styles from "./UpdateUserTemplate.module.scss";
import UpdateUserForm from "@/components/organisms/updateUserForm/UpdateUserForm";
import useUserNickNameStore from "@/stores/useUserNickNameStore/useUserNickNameStore";

function UpdateUserTemplate(): JSX.Element {
  const { userNickName } = useUserNickNameStore();
  
  return (
    <>
      <div className={styles.container}>
        <div className={styles.userImageContainer}>
          <UserImage type="updateUserPage" />
          <p className={styles.userNickName}>{userNickName}</p>
        </div>
        <div className={styles.updateUserFormContainer}>
          <UpdateUserForm />
        </div>
      </div>
    </>
  );
}

export default UpdateUserTemplate;

import UserImage from "@/components/atoms/userImage/UserImage";
import styles from "./UpdateUserTemplate.module.scss";
import UpdateUserForm from "@/components/organisms/updateUserForm/UpdateUserForm";
import UserName from "@/components/atoms/userName/UserName";

function UpdateUserTemplate(): JSX.Element {
  const content = {
    id: 1,
    userName: "김범수",
    title: "Next.Js 13",
    date: "2023-10-30",
    content: "",
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.userImageContainer}>
          <UserImage type="updateUserPage" />
          <UserName content={content} type="updateUserPage" />
        </div>
        <div className={styles.updateUserFormContainer}>
          <UpdateUserForm />
        </div>
      </div>
    </>
  );
}

export default UpdateUserTemplate;

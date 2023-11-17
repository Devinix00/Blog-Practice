import styles from "./UserName.module.scss";

interface IProps {
  content: IContent;
  type?: string;
}

function UserName({ content, type }: IProps): JSX.Element {
  const userNameClass = `${styles.userName} ${
    type === "updateUserPage" ? styles.updateUser : null
  }`;

  return (
    <>
      <div className={userNameClass}>{content.userName}</div>
    </>
  );
}

export default UserName;

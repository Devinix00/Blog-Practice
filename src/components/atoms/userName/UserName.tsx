import styles from "./UserName.module.scss";

interface IProps {
  content: IContent;
}

function UserName({ content }: IProps): JSX.Element {
  return (
    <>
      <div className={styles.userName}>{content.userName}</div>
    </>
  );
}

export default UserName;

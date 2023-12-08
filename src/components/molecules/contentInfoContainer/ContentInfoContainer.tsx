import UserImage from "@/components/atoms/userImage/UserImage";
import styles from "./ContentInfoContainer.module.scss";
import UserName from "@/components/atoms/userName/UserName";
import CreatedDate from "@/components/atoms/createdDate/CreatedDate";

interface IProps {
  post: IPost;
}

function ContentInfoContainer({ post }: IProps): JSX.Element {
  return (
    <>
      <div className={styles.container}>
        <UserImage type="mainPage" />
        <div className={styles.infoContainer}>
          <UserName post={post} />
          <CreatedDate post={post} />
        </div>
      </div>
    </>
  );
}

export default ContentInfoContainer;

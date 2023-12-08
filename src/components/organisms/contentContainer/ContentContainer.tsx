import ContentImage from "@/components/atoms/contentImage/ContentImage";
import styles from "./Content.module.scss";
import MainContentContainer from "../mainContentContainer/MainContentContainer";

interface IProps {
  post: IPost;
}

function ContentContainer({ post }: IProps): JSX.Element {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.mainContentContainer}>
          <MainContentContainer post={post} />
        </div>
        <div className={styles.contentImageContainer}>
          <ContentImage />
        </div>
      </div>
    </>
  );
}

export default ContentContainer;

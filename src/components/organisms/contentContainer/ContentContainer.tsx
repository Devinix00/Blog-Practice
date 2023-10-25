import ContentImage from "@/components/atoms/contentImage/ContentImage";
import styles from "./Content.module.scss";
import MainContentContainer from "../mainContentContainer/MainContentContainer";

interface IProps {
  content: IContent;
}

function ContentContainer({ content }: IProps): JSX.Element {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.mainContentContainer}>
          <MainContentContainer content={content} />
        </div>
        <div className={styles.contentImageContainer}>
          <ContentImage />
        </div>
      </div>
    </>
  );
}

export default ContentContainer;

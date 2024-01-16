import ContentInfoContainer from "@/components/molecules/contentInfoContainer/ContentInfoContainer";
import styles from "./MainContentContainer.module.scss";
import MainContent from "@/components/molecules/mainContent/MainContent";
import Reaction from "@/components/molecules/reaction/Reaction";

interface IProps {
  post: IPost;
}

function MainContentContainer({ post }: IProps): JSX.Element {
  return (
    <>
      <div className={styles.container}>
        <ContentInfoContainer post={post} />
        <MainContent post={post} />
        <Reaction post={post} />
      </div>
    </>
  );
}

export default MainContentContainer;

import ContentInfoContainer from "@/components/molecules/contentInfoContainer/ContentInfoContainer";
import styles from "./MainContentContainer.module.scss";
import MainContent from "@/components/molecules/mainContent/MainContent";
import Reaction from "@/components/molecules/reaction/Reaction";

interface IProps {
  content: IContent;
}

function MainContentContainer({ content }: IProps): JSX.Element {
  return (
    <>
      <div className={styles.container}>
        <ContentInfoContainer content={content} />
        <MainContent content={content} />
        <Reaction />
      </div>
    </>
  );
}

export default MainContentContainer;

import PostManagement from "@/components/molecules/postManagement/PostManagement";
import styles from "./UserContentsContainer.module.scss";
import UserContent from "@/components/molecules/userContent/UserContent";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

interface IProps {
  currentContents: IContent[];
}

function UserContentsContainer({ currentContents }: IProps): JSX.Element {
  return (
    <>
      <div className={styles.container}>
        <PostManagement />
        <div className={styles.userContents}>
          {currentContents?.map((content: IContent) => (
            <UserContent key={content.id} content={content} />
          ))}
        </div>
        <Button
          variant="contained"
          startIcon={<DeleteIcon />}
          className={styles.deleteButton}
        >
          삭제
        </Button>
      </div>
    </>
  );
}

export default UserContentsContainer;

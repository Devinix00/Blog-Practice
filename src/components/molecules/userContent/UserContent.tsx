import Checkbox from "@/components/atoms/checkbox/Checkbox";
import styles from "./UserContent.module.scss";
import Reaction from "../reaction/Reaction";
import DeleteIcon from "@mui/icons-material/Delete";

interface IProps {
  content: IContent;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function UserContent({ content, checked, onChange }: IProps): JSX.Element {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.checkboxContainer}>
          <Checkbox checked={checked} onChange={onChange}/>
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.title}>{content.title}</div>
          <div className={styles.reactionAndDateContainer}>
            <Reaction>
              <DeleteIcon className={styles.deleteButton} />
            </Reaction>
            <div className={styles.date}>{content.date}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserContent;

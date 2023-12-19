import Checkbox from "@/components/atoms/checkbox/Checkbox";
import styles from "./UserContent.module.scss";
import Reaction from "../reaction/Reaction";
import DeleteIcon from "@mui/icons-material/Delete";
import Link from "next/link";

interface IProps {
  post: IPost;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function UserContent({ post, checked, onChange }: IProps): JSX.Element {
  const dynamicPath = `/postPage/${post.id}`;

  return (
    <>
      <div className={styles.container}>
        <div className={styles.checkboxContainer}>
          <Checkbox checked={checked} onChange={onChange} />
        </div>
        <div className={styles.contentContainer}>
          <Link
            href="/postPage/[postId]"
            as={dynamicPath}
            className={styles.title}
          >
            {post.title}
          </Link>
          <div className={styles.reactionAndDateContainer}>
            <Reaction>
              <DeleteIcon className={styles.deleteButton} />
            </Reaction>
            <div className={styles.date}>{post.createdAt}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserContent;

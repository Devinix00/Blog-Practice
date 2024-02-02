import Checkbox from "@/components/atoms/checkbox/Checkbox";
import styles from "./UserContent.module.scss";
import Reaction from "../reaction/Reaction";
import DeleteIcon from "@mui/icons-material/Delete";
import Link from "next/link";
import useDeletePost from "@/hooks/useDeletePost/useDeletePost";
import { Dispatch, SetStateAction } from "react";

interface IProps {
  post: IPost;
  posts: IPost[] | undefined;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setPosts: Dispatch<SetStateAction<IPost[] | undefined>>;
}

function UserContent({
  posts,
  post,
  setPosts,
  checked,
  onChange,
}: IProps): JSX.Element {
  const dynamicPath = `/postPage/${post.id}`;
  const { handleDeletePost } = useDeletePost({ posts, setPosts });

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
          <DeleteIcon
            className={styles.deleteButton}
            onClick={() => handleDeletePost(post.id)}
          />
          <div className={styles.date}>{post.createdAt}</div>
        </div>
      </div>
    </>
  );
}

export default UserContent;

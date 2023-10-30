import CreatePostForm from "../createPostForm/CreatePostForm";
import styles from "./CreatePostMain.module.scss";

function CreatePostMain(): JSX.Element {
  return (
    <>
      <div className={styles.container}>
        <CreatePostForm />
      </div>
    </>
  );
}

export default CreatePostMain;

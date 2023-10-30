import CreateFormTitleContainer from "@/components/molecules/createFormTitleContainer/CreateFormTitleContainer";
import styles from "./CreatePostForm.module.scss";

function CreatePostForm(): JSX.Element {
  return (
    <>
      <div className={styles.container}>
        <form className={styles.form}>
          <CreateFormTitleContainer />
        </form>
      </div>
    </>
  );
}

export default CreatePostForm;

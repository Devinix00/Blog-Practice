import CreateFormTitleContainer from "@/components/molecules/createFormTitleContainer/CreateFormTitleContainer";
import styles from "./CreatePostForm.module.scss";
import CreateFormTextareaContainer from "@/components/molecules/createFormTextareaContainer/CreateFormTextareaContainer";
import InputFileAndButtonContainer from "@/components/molecules/inputFileAndButtonContainer/InputFileAndButtonContainer";

function CreatePostForm(): JSX.Element {
  return (
    <>
      <div className={styles.container}>
        <form className={styles.form}>
          <CreateFormTitleContainer />
          <CreateFormTextareaContainer />
          <InputFileAndButtonContainer />
        </form>
      </div>
    </>
  );
}

export default CreatePostForm;

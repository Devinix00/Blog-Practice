"use client";

import CreateFormTitleContainer from "@/components/molecules/createFormTitleContainer/CreateFormTitleContainer";
import styles from "./CreatePostForm.module.scss";
import CreateFormTextareaContainer from "@/components/molecules/createFormTextareaContainer/CreateFormTextareaContainer";
import InputFileAndButtonContainer from "@/components/molecules/inputFileAndButtonContainer/InputFileAndButtonContainer";
import { useState } from "react";
import useUserIdStore from "@/stores/useUserIdStore/useUserIdStore";
import useCreatePost from "@/hooks/useCreatePost/useCreatePost";

function CreatePostForm(): JSX.Element {
  const { userId } = useUserIdStore();
  const [inputValues, setInputValues] = useState<ICreatePostValues>({
    userId: userId,
    title: "",
    content: "",
    mainImg: "",
  });

  const { handleCreatePost, onChange } = useCreatePost({
    inputValues,
    setInputValues,
  });

  return (
    <>
      <div className={styles.container}>
        <form onSubmit={handleCreatePost} className={styles.form}>
          <CreateFormTitleContainer
            name="title"
            value={inputValues.title}
            onChange={onChange}
          />
          <CreateFormTextareaContainer
            name="content"
            value={inputValues.content}
            onChange={onChange}
          />
          <InputFileAndButtonContainer type="submit" />
        </form>
      </div>
    </>
  );
}

export default CreatePostForm;

"use client";

import FileInput from "@/components/molecules/fileInput/FileInput";
import styles from "./UpdateUserForm.module.scss";
import UpdateInputGroup from "@/components/molecules/updateInputGroup/UpdateInputGroup";
import UpdateButton from "@/components/atoms/updateButton/UpdateButton";
import { useState } from "react";
import useUpdateUserForm from "@/hooks/useUpdateUserForm/useUpdateUserForm";
import ConfirmMessage from "@/components/atoms/confrimMessage/ConfrimMessage";

interface IInputValues {
  nickName: string;
  newPw: string;
  confirmPassword: string;
}

function UpdateUserForm(): JSX.Element {
  const [inputValues, setInputValues] = useState<IInputValues>({
    nickName: "",
    newPw: "",
    confirmPassword: "",
  });

  const { confirmMessage, onChange, handleSubmit } = useUpdateUserForm({
    inputValues,
    setInputValues,
  });

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.container}>
        <FileInput />
        <UpdateInputGroup
          labelText="닉네임 수정"
          inputType="text"
          name="nickName"
          value={inputValues.nickName}
          onChange={onChange}
          placeholder="새 닉네임을 입력해주세요..."
        />
        <UpdateInputGroup
          labelText="비밀번호 수정"
          inputType="password"
          name="newPw"
          value={inputValues.newPw}
          onChange={onChange}
          placeholder="새 비밀번호를 입력해주세요..."
        />
        <UpdateInputGroup
          labelText="비밀번호 확인"
          inputType="password"
          name="confirmPassword"
          value={inputValues.confirmPassword}
          onChange={onChange}
          placeholder="비밀번호를 확인해주세요..."
        />
        <ConfirmMessage confirmMessage={confirmMessage} />
        <UpdateButton type="submit" text="수정하기" />
      </form>
    </>
  );
}

export default UpdateUserForm;

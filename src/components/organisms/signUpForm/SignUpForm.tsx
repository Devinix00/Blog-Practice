"use client";

import SignButton from "@/components/atoms/signButton/SignButton";
import styles from "./SignUpForm.module.scss";
import SignInputGroup from "@/components/molecules/signInputGroup/SignInputGroup";
import { useState } from "react";
import useSignUpForm from "@/hooks/useSignUpForm/useSignUpForm";
import ConfirmMessage from "@/components/atoms/confrimMessage/ConfrimMessage";
import UserImage from "@/components/atoms/userImage/UserImage";
import FileInput from "@/components/molecules/fileInput/FileInput";

function SignUpForm(): JSX.Element {
  const [inputValues, setInputValues] = useState<ISignUpValues>({
    nickName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { confirmMessage, handleSignUp, onChange } = useSignUpForm({
    inputValues,
    setInputValues,
  });

  return (
    <>
      <form onSubmit={handleSignUp} className={styles.signUpContainer}>
        <h2 className={styles.title}>회원가입</h2>
        <div className={styles.userImageContainer}>
          <UserImage type="signUpPage" />
          <FileInput />
        </div>
        <SignInputGroup
          inputType="first"
          type="text"
          id="nickName"
          name="nickName"
          labelText="닉네임"
          placeholder="닉네임을 입력해주세요..."
          value={inputValues.nickName}
          onChange={onChange}
          required
        />
        <SignInputGroup
          type="email"
          id="email"
          name="email"
          labelText="이메일"
          placeholder="이메일을 입력해주세요..."
          value={inputValues.email}
          onChange={onChange}
          required
        />
        <SignInputGroup
          type="password"
          id="password"
          name="password"
          labelText="비밀번호"
          placeholder="비밀번호를 입력해주세요..."
          value={inputValues.password}
          onChange={onChange}
          required
        />
        <SignInputGroup
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          labelText="비밀번호 확인"
          placeholder="비밀번호를 다시 입력해주세요..."
          value={inputValues.confirmPassword}
          onChange={onChange}
          required
        />
        {/* <div className={styles.confirmMessage}>{confirmMessage}</div> */}
        <ConfirmMessage confirmMessage={confirmMessage} />
        <SignButton type="submit">가입하기</SignButton>
      </form>
    </>
  );
}

export default SignUpForm;

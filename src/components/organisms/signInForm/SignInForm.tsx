"use client";

import SignButton from "@/components/atoms/signButton/SignButton";
import styles from "./SignInForm.module.scss";
import SignInputGroup from "@/components/molecules/signInputGroup/SignInputGroup";
import { useState } from "react";
import useSignInForm from "@/hooks/useSignInForm/useSignInForm";

interface IInputValues {
  email: string;
  password: string;
}

function SignInForm(): JSX.Element {
  const [inputValues, setInputValues] = useState<IInputValues>({
    email: "",
    password: "",
  });

  const { handleSignIn, onChange } = useSignInForm({
    inputValues,
    setInputValues,
  });

  return (
    <>
      <form onSubmit={handleSignIn} className={styles.signUpContainer}>
        <h2 className={styles.title}>로그인</h2>
        <SignInputGroup
          inputType="first"
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
        <SignButton type="submit">로그인</SignButton>
      </form>
    </>
  );
}

export default SignInForm;

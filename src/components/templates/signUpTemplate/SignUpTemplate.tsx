import React from "react";
import styles from "./SignUpTemplate.module.scss";
import SignUpForm from "@/components/organisms/signUpForm/SignUpForm";

function SignUpTemplate(): JSX.Element {
  return (
    <>
      <div className={styles.container}>
        <SignUpForm />
      </div>
    </>
  );
}

export default SignUpTemplate;

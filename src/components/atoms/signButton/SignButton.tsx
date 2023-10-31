import React from "react";
import styles from "./SignButton.module.scss";

interface IProps {
  type: "button" | "submit" | "reset";
  children: React.ReactNode;
}

const SignButton = ({ type, children }: IProps): JSX.Element => {
  return (
    <button type={type} className={styles.submitButton}>
      {children}
    </button>
  );
};

export default SignButton;

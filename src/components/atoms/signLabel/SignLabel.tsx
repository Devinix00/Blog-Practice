import React from "react";
import styles from "./SignLabel.module.scss";

interface IProps {
  htmlFor: string;
  children: React.ReactNode;
}

const SignLabel = ({ htmlFor, children }: IProps): JSX.Element => {
  return (
    <label htmlFor={htmlFor} className={styles.label}>
      {children}
    </label>
  );
};

export default SignLabel;

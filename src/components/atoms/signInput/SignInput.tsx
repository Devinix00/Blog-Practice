import React from "react";
import styles from "./SignInput.module.scss";

interface IProps {
  type: string;
  id: string;
  name: string;
  placeholder: string;
  required?: boolean;
}

const SignInput = ({
  type,
  id,
  name,
  placeholder,
  required,
}: IProps): JSX.Element => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      className={styles.input}
      required={required}
    />
  );
};

export default SignInput;

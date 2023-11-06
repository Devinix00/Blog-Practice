import React from "react";
import styles from "./SignInput.module.scss";

interface IProps {
  type: string;
  id: string;
  name: string;
  placeholder: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SignInput = ({
  type,
  id,
  name,
  placeholder,
  required,
  value,
  onChange,
}: IProps): JSX.Element => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      className={styles.input}
      required={required}
      value={value}
      onChange={onChange}
    />
  );
};

export default SignInput;

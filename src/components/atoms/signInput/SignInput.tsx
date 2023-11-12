import React from "react";
import styles from "./SignInput.module.scss";
import useInputFocus from "@/hooks/useInputFocus/useInputFocus";

interface IProps {
  inputType?: string;
  type: string;
  id: string;
  name: string;
  placeholder: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SignInput = ({
  inputType,
  type,
  id,
  name,
  placeholder,
  required,
  value,
  onChange,
}: IProps): JSX.Element => {
  const { inputRef } = useInputFocus(inputType);

  return (
    <input
      ref={inputRef}
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

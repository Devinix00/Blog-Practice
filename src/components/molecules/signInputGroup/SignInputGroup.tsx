import React from "react";
import styles from "./SignInputGroup.module.scss";
import SignLabel from "@/components/atoms/signLabel/SignLabel";
import SignInput from "@/components/atoms/signInput/SignInput";

interface IProps {
  inputType?: string;
  type: string;
  id: string;
  name: string;
  labelText: string;
  placeholder: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SignInputGroup = ({
  inputType,
  type,
  id,
  name,
  labelText,
  placeholder,
  required,
  value,
  onChange,
}: IProps): JSX.Element => {
  return (
    <div className={styles.inputGroup}>
      <SignLabel htmlFor={id}>{labelText}</SignLabel>
      <SignInput
        inputType={inputType}
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default SignInputGroup;

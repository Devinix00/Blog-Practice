import React from "react";
import styles from "./SignInputGroup.module.scss";
import SignLabel from "@/components/atoms/signLabel/SignLabel";
import SignInput from "@/components/atoms/signInput/SignInput";

interface IProps {
  type: string;
  id: string;
  name: string;
  labelText: string;
  placeholder: string;
  required?: boolean;
}

const SignInputGroup = ({
  type,
  id,
  name,
  labelText,
  placeholder,
  required,
}: IProps): JSX.Element => {
  return (
    <div className={styles.inputGroup}>
      <SignLabel htmlFor={id}>{labelText}</SignLabel>
      <SignInput
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default SignInputGroup;

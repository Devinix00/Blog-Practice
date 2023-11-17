import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface IProps {
  inputValues: IInputValues;
  setInputValues: Dispatch<SetStateAction<IInputValues>>;
}

interface IInputValues {
  nickName: string;
  newPw: string;
  confirmPassword: string;
}

interface IUseUpdateUserForm {
  confirmMessage: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const useUpdateUserForm = ({
  inputValues,
  setInputValues,
}: IProps): IUseUpdateUserForm => {
  const [confirmMessage, setConfirmMessage] = useState<string>("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  useEffect(() => {
    if (inputValues.newPw && inputValues.confirmPassword) {
      setConfirmMessage(
        inputValues.newPw === inputValues.confirmPassword
          ? "비밀번호가 일치합니다."
          : "비밀번호가 일치하지 않습니다."
      );
    }
  }, [inputValues.newPw, inputValues.confirmPassword]);

  return {
    confirmMessage,
    onChange,
  };
};

export default useUpdateUserForm;

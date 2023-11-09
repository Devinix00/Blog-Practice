import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface IProps {
  inputValues: IInputValues;
  setInputValues: Dispatch<SetStateAction<IInputValues>>;
}

interface IInputValues {
  id: string;
  password: string;
  confirmPassword: string;
}

interface IUseSignUpForm {
  confirmMessage: string;
  handleSignUp: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const useSignUpForm = ({
  inputValues,
  setInputValues,
}: IProps): IUseSignUpForm => {
  const [confirmMessage, setConfirmMessage] = useState<string>("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  useEffect(() => {
    if (inputValues.password && inputValues.confirmPassword) {
      setConfirmMessage(
        inputValues.password === inputValues.confirmPassword
          ? "비밀번호가 일치합니다."
          : "비밀번호가 일치하지 않습니다."
      );
    }
  }, [inputValues.password, inputValues.confirmPassword]);

  const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputValues.password !== inputValues.confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    if (window.confirm("회원가입 하시겠습니까?")) {
      alert("회원가입 되었습니다.");
    } else {
      alert("취소합니다.");
      return;
    }

    fetch(
      "https://port-0-portfolio-blog-12fhqa2llo6r1gkk.sel5.cloudtype.app/api/user/join",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: inputValues.id,
          password: inputValues.password,
        }),
        cache: "force-cache",
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((result) => console.log(result))
      .catch((error) => console.error(error));

    setInputValues({ id: "", password: "", confirmPassword: "" });
  };

  return {
    confirmMessage,
    handleSignUp,
    onChange,
  };
};

export default useSignUpForm;

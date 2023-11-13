import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface IProps {
  inputValues: IInputValues;
  setInputValues: Dispatch<SetStateAction<IInputValues>>;
}

interface IInputValues {
  email: string;
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
  const router = useRouter();

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

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputValues.password !== inputValues.confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    alert("회원가입 하시겠습니까?");

    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_API_BASE_URL + "/user/join",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: inputValues.email,
            password: inputValues.password,
          }),
        }
      );

      if (response.status === 409) {
        alert("아이디가 중복되었습니다.");
        return;
      }

      const data = await response.text();

      if (response.ok) {
        alert("회원가입이 완료되었습니다.");
        setInputValues({ email: "", password: "", confirmPassword: "" });
        router.push("/signInPage");
        return data;
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  return {
    confirmMessage,
    handleSignUp,
    onChange,
  };
};

export default useSignUpForm;

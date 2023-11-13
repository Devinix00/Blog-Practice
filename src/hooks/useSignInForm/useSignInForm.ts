import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface IProps {
  inputValues: IInputValues;
  setInputValues: Dispatch<SetStateAction<IInputValues>>;
}

interface IInputValues {
  email: string;
  password: string;
}

interface IUseSignInForm {
  handleSignIn: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const useSignInForm = ({
  inputValues,
  setInputValues,
}: IProps): IUseSignInForm => {
  const router = useRouter();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_API_BASE_URL + "/user/login",
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

      if (response.status === 404) {
        alert("가입되지 않은 이메일입니다.");
        return;
      }

      if (response.status === 401) {
        alert("잘못된 비밀번호입니다.");
        return;
      }

      const data = await response.text();

      if (response.ok) {
        setInputValues({ email: "", password: "" });
        const accessToken = data;
        localStorage.setItem("accessToken", accessToken);
        router.push("/");
        return data;
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  return {
    handleSignIn,
    onChange,
  };
};

export default useSignInForm;

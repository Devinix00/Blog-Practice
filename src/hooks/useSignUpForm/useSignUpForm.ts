import authApi from "@/api/authApi";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import useOnChange from "../useOnChange/useOnChange";

interface IProps {
  inputValues: ICommonAuthValues;
  setInputValues: Dispatch<SetStateAction<ICommonAuthValues>>;
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
  const { onChange } = useOnChange({ inputValues, setInputValues });

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

    if (window.confirm("회원가입 하시겠습니까?")) {
    } else {
      alert("취소합니다.");
      return;
    }

    try {
      const userData = {
        nickName: inputValues.nickName,
        email: inputValues.email,
        password: inputValues.password,
      };

      const signUpApiUrl = "/user/join";

      const { response, data }: { response: Response; data: string } =
        await authApi(userData, signUpApiUrl);

      const duplictedNickName = "NICKNAME_DUPLICATED";
      const duplictedEmail = "EMAIL_DUPLICATE";

      if (data.includes(duplictedNickName)) {
        alert("닉네임이 중복되었습니다.");
        return;
      }

      if (data.includes(duplictedEmail)) {
        alert("이메일이 중복되었습니다.");
        return;
      }

      if (response.ok) {
        alert("회원가입이 완료되었습니다.");
        setInputValues({
          nickName: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
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

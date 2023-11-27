import authApi from "@/api/authApi";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import useOnChange from "../useOnChange/useOnChange";

interface IProps {
  inputValues: ICommonValues;
  setInputValues: Dispatch<SetStateAction<ICommonValues>>;
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

  const { onChange } = useOnChange({ inputValues, setInputValues });

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const userData = {
        email: inputValues.email,
        password: inputValues.password,
      };

      const signInApiUrl = "/user/login";

      const { response, data }: { response: Response; data: string } =
        await authApi(userData, signInApiUrl);

      const emailNotFound = "EMAIL_NOT_FOUND";
      const invalidPassword = "INVALID_PASSWORD";

      if (data.includes(emailNotFound)) {
        alert("가입되지 않은 이메일입니다.");
        return;
      }

      if (data.includes(invalidPassword)) {
        alert("잘못된 비밀번호입니다.");
        return;
      }

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

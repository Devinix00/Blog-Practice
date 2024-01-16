import authApi from "@/api/auth/authApi";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import useOnChange from "../useOnChange/useOnChange";
import useUserIdStore from "@/stores/useUserIdStore/useUserIdStore";
import useIsLoggedinStore from "@/stores/useIsLoggedinStore/useIsLoggedinStore";
import useUserNickNameStore from "@/stores/useUserNickNameStore/useUserNickNameStore";

interface IProps {
  inputValues: ISignInValues;
  setInputValues: Dispatch<SetStateAction<ISignInValues>>;
}

interface IUseSignInForm {
  handleSignIn: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function useSignInForm({
  inputValues,
  setInputValues,
}: IProps): IUseSignInForm {
  const router = useRouter();
  const { setLoggedInTrue } = useIsLoggedinStore();
  const { setUserId } = useUserIdStore();
  const { setUserNickName } = useUserNickNameStore();

  const { onChange } = useOnChange<ISignInValues>({ setInputValues });

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const userData = {
        email: inputValues.email,
        password: inputValues.password,
      };

      const signInApiUrl = "/user/login";

      const { response, data } = await authApi<ISignInValues>(
        userData,
        signInApiUrl
      );

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
        setInputValues(() => ({
          email: "",
          password: "",
        }));
        const jsonData = JSON.parse(data);
        const { accessToken } = jsonData;
        console.log(jsonData);
        localStorage.setItem("accessToken", accessToken);
        setUserId(jsonData.userId);
        setUserNickName(jsonData.userInfoResponse.nickName);
        setLoggedInTrue();
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
}

export default useSignInForm;

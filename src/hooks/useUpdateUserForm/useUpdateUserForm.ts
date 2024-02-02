import updateUserApi from "@/api/updateUser/updateUserApi";
import useUserNickNameStore from "@/stores/useUserNickNameStore/useUserNickNameStore";
import {
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";

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
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const useUpdateUserForm = ({
  inputValues,
  setInputValues,
}: IProps): IUseUpdateUserForm => {
  const [confirmMessage, setConfirmMessage] = useState<string>("");
  const { setUserNickName } = useUserNickNameStore();

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

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    try {
      const userData = {
        newPw: inputValues.newPw,
        nickName: inputValues.nickName,
      };

      if (!inputValues.newPw || !inputValues.nickName) {
        alert("모든 필드를 입력해주세요!");
        return;
      }

      if (inputValues.newPw !== inputValues.confirmPassword) {
        alert("비밀번호가 일치하지 않습니다.");
        return;
      }

      if (confirm("수정하시겠습니까?")) {
        alert("수정이 완료되었습니다.");
      } else {
        alert("취소합니다");
        return;
      }

      updateUserApi(userData);
    } catch (error) {
      console.error(error);
    } finally {
      setUserNickName(inputValues.nickName);
      setInputValues((prevValues) => ({
        ...prevValues,
        nickName: "",
        newPw: "",
        confirmPassword: "",
      }));
    }
  };

  return {
    confirmMessage,
    onChange,
    handleSubmit,
  };
};

export default useUpdateUserForm;

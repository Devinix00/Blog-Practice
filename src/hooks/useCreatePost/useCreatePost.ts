import { Dispatch, SetStateAction } from "react";
import useOnChange from "../useOnChange/useOnChange";
import createPostApi from "@/api/createPost/createPostApi";
import { useRouter } from "next/navigation";

interface IProps {
  inputValues: ICreatePostValues;
  setInputValues: Dispatch<SetStateAction<ICreatePostValues>>;
}

interface IUseCreatePost {
  handleCreatePost: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

function useCreatePost({
  inputValues,
  setInputValues,
}: IProps): IUseCreatePost {
  const router = useRouter();
  const { onChange } = useOnChange<ICreatePostValues>({ setInputValues });

  const handleCreatePost = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputValues.title === "") {
      alert("제목을 입력해주세요.");
      return;
    } else if (inputValues.content === "") {
      alert("내용을 입력해주세요.");
      return;
    }

    if (inputValues.mainImg === "") {
      if (
        window.confirm("이미지가 선택되지 않았습니다. 업로드 하시겠습니까?")
      ) {
        alert("업로드 되었습니다.");
      } else {
        alert("취소합니다.");
        return;
      }
    } else {
      if (window.confirm("업로드 하시겠습니까?")) {
        alert("업로드 되었습니다.");
      } else {
        alert("취소합니다.");
        return;
      }
    }

    try {
      const userData = {
        userId: inputValues.userId,
        title: inputValues.title,
        content: inputValues.content,
        mainImg: inputValues.mainImg,
      };

      const { responseStatus, responseStatusText, data } = await createPostApi(
        userData
      );

      if (responseStatus === 200) {
        setInputValues((inputValues) => ({
          ...inputValues,
          title: "",
          content: "",
          mainImg: "",
        }));
        router.refresh();
        router.push("/userPage");
        return data;
      } else {
        throw new Error(`HTTP error! status: ${responseStatus},
        ${responseStatusText}`);
      }
    } catch (error) {
      console.error("There was an error!", error);
    }
  };
  return { handleCreatePost, onChange };
}

export default useCreatePost;

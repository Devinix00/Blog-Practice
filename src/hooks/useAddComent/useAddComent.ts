import { Dispatch, SetStateAction } from "react";
import useOnChange from "../useOnChange/useOnChange";
import addCommentApi from "@/api/addComment/addCommentApi";
import { useRouter } from "next/navigation";

interface IProps {
  postId: number;
  userId: number | null;
  inputValues: { content: string };
  setInputValues: Dispatch<SetStateAction<{ content: string }>>;
}

interface IReturn {
  handleSubmit: (
    e:
      | React.FormEvent<HTMLFormElement>
      | React.KeyboardEvent<HTMLTextAreaElement>
  ) => void;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

function useAddComment({
  postId,
  userId,
  inputValues,
  setInputValues,
}: IProps): IReturn {
  const { onChange } = useOnChange<{ content: string }>({ setInputValues });
  const router = useRouter();

  const handleSubmit = async (
    e:
      | React.FormEvent<HTMLFormElement>
      | React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    e.preventDefault();

    try {
      if (inputValues.content === "") {
        alert("내용을 입력해주세요.");
        return;
      }

      const userData: IComment = {
        postId: postId,
        userId: userId,
        content: inputValues.content,
      };

      if (window.confirm("댓글을 작성하시겠습니까?")) {
        alert("댓글이 작성되었습니다.");
      } else {
        alert("취소합니다.");
        return;
      }

      const { data, response } = await addCommentApi(userData);

      if (response.ok) {
        setInputValues(() => ({ content: "" }));
        router.refresh();
        return data;
      } else {
        alert(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return { handleSubmit, onChange };
}

export default useAddComment;

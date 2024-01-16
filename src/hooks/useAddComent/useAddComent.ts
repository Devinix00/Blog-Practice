import { Dispatch, SetStateAction } from "react";
import useOnChange from "../useOnChange/useOnChange";
import addCommentApi from "@/api/addComment/addCommentApi";
import { useRouter } from "next/navigation";
import useIsLoggedinStore from "@/stores/useIsLoggedinStore/useIsLoggedinStore";

interface IProps {
  postId: string;
  userId: number | null;
  inputValues: { content: string };
  setInputValues: Dispatch<SetStateAction<{ content: string }>>;
  setIsSubmitting: Dispatch<SetStateAction<boolean>>;
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
  setIsSubmitting,
}: IProps): IReturn {
  const { onChange } = useOnChange<{ content: string }>({ setInputValues });
  const router = useRouter();
  const { isLoggedIn } = useIsLoggedinStore();

  const handleSubmit = async (
    e:
      | React.FormEvent<HTMLFormElement>
      | React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    e.preventDefault();

    try {
      if (!isLoggedIn) {
        if (window.confirm("로그인이 필요합니다.")) {
          alert("로그인 페이지로 이동합니다.");
          router.push("/signInPage");
          return;
        } else {
          alert("취소합니다.");
          return;
        }
      }

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

      setIsSubmitting(true);

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
    } finally {
      setIsSubmitting(false);
    }
  };
  return { handleSubmit, onChange };
}

export default useAddComment;

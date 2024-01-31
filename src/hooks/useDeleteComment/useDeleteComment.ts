import deleteCommentApi from "@/api/deleteComment/deleteCommentApi";
import { useRouter } from "next/navigation";

interface IUseDeleteComment {
  deleteComment: (replyId: string) => void;
}

function useDeleteComment(): IUseDeleteComment {
  const router = useRouter();
  const deleteComment = async (replyId: string) => {
    try {
      if (confirm("삭제 하시겠습니까?")) {
        alert("삭제 되었습니다.");
      } else {
        alert("취소합니다.");
        return;
      }
      const { response } = await deleteCommentApi(replyId);
      console.log("response:", response);

      if (response.ok) {
        router.refresh();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return { deleteComment };
}

export default useDeleteComment;

import useDeletePostMutation from "@/services/userPage/mutations/useUserPageMutations";
import { useRouter } from "next/navigation";

interface IReturn {
  handleDeletePost: (postId: number) => void;
}

function useDeletePost(): IReturn {
  const router = useRouter();
  const { deletePost } = useDeletePostMutation();

  const handleDeletePost = (postId: number): void => {
    if (window.confirm("삭제 하시겠습니까?")) {
      alert("삭제 되었습니다.");
    } else {
      alert("취소합니다");
      return;
    }
    deletePost(postId);
    setTimeout(() => {
      router.refresh();
    }, 500);
  };

  return { handleDeletePost };
}

export default useDeletePost;

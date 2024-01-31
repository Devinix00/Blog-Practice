import deletePostApi from "@/api/deletePost/deletePostApi";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

interface IReturn {
  handleDeletePost: (postId: number) => void;
}

interface IProps {
  posts: IPost[] | undefined;
  setPosts: Dispatch<SetStateAction<IPost[] | undefined>>;
}

function useDeletePost({ posts, setPosts }: IProps): IReturn {
  const router = useRouter();

  const handleDeletePost = async (postId: number) => {
    if (window.confirm("삭제 하시겠습니까?")) {
      alert("삭제 되었습니다.");
    } else {
      alert("취소합니다");
      return;
    }

    const { response } = await deletePostApi(postId);

    if (response.ok) {
      const filteredPosts = posts?.filter((post) => post.id !== postId);
      setPosts(filteredPosts);
      router.refresh();
    }
  };

  return { handleDeletePost };
}

export default useDeletePost;

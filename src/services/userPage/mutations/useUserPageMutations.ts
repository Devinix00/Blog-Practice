import deletePostApi from "@/api/deletePost/deletePostApi";
import { QUERY_KEYS } from "@/constants/queryKeys";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface IUseDeletePostMutation {
  deletePost: (postId: number) => void;
}

function useDeletePostMutation(): IUseDeletePostMutation {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (postId: number) => {
      return deletePostApi(postId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.MY_POSTS });
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const deletePost = mutation.mutate;

  return { deletePost };
}

export default useDeletePostMutation;

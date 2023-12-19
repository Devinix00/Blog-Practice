import getMyPostsApi from "@/api/getMyPosts/getMyPostsApi";
import { QUERY_KEYS } from "@/constants/queryKeys";
import { useQuery } from "@tanstack/react-query";

interface IUseGetMyPostsQuery {
  posts: IPost[];
  postsIsLoading: boolean;
  postsError: Error | null;
}

function useGetMyPostsQuery(userId: number | null): IUseGetMyPostsQuery {
  const myPostsQueryResult = useQuery({
    queryKey: [QUERY_KEYS.MY_POSTS],
    queryFn: () => {
      return getMyPostsApi(userId);
    },
  });

  const posts = myPostsQueryResult.data?.data;
  const postsIsLoading = myPostsQueryResult.isLoading;
  const postsError = myPostsQueryResult.error;

  return { posts, postsIsLoading, postsError };
}

export default useGetMyPostsQuery;

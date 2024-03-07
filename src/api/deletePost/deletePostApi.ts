import tokenManager from "@/utils/tokenManager";

async function deletePostApi(postId: number | number[]) {
  const accessToken = tokenManager.getToken();
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_BASE_URL + `/posts/delete?postIds=${postId}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  const data = await response.text();

  return { data, response };
}

export default deletePostApi;

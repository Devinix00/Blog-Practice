import tokenManager from "@/utils/tokenManager";

async function likeApi(postId: string | undefined) {
  const accessToken = tokenManager.getToken();
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_BASE_URL + `/likes/toggle?postId=${postId}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  const data = await response.text();
  return { data, response };
}

export default likeApi;

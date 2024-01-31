async function deletePostApi(postId: number) {
  const accessToken = localStorage.getItem("accessToken");
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
  const data = response.text();
  return { data, response };
}

export default deletePostApi;

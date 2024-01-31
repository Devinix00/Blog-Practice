async function deleteCommentApi(replyId: string) {
  const accessToken = localStorage.getItem("accessToken");
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_BASE_URL + `/replies/delete?replyId=${replyId}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  return { response };
}

export default deleteCommentApi;

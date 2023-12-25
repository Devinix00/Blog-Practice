async function addCommentApi(userData: IComment) {
  const accessToken = localStorage.getItem("accessToken");
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_BASE_URL + "/replies/post/add",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(userData),
    }
  );

  const data = await response.json();
  return { data, response };
}

export default addCommentApi;

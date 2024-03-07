import tokenManager from "@/utils/tokenManager";

async function addCommentApi(userData: IComment) {
  const accessToken = tokenManager.getToken();
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_BASE_URL + "/replies/add",
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

async function createPostApi(userData: ICreatePostValues) {
  const accessToken = localStorage.getItem("accessToken");
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_BASE_URL + "/posts/add",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(userData),
    }
  );

  let responseStatus;
  let responseStatusText;

  if (response.status === 200) {
    responseStatus = 200;
  } else {
    responseStatus = response.status;
    responseStatusText = response.statusText;
  }

  const data = await response.json();
  return { responseStatus, responseStatusText, data };
}

export default createPostApi;

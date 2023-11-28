async function createPostApi(userData: ICreatePostValues) {
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_BASE_URL + "/posts/post/add",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    }
  );

  const data = await response.text();
  return { response, data };
}

export default createPostApi;

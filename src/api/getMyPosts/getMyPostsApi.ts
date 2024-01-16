async function getMyPostsApi(userId: number | null) {
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_BASE_URL + `/posts/getpostby?userId=${userId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const data = await response.json();
  return { data };
}

export default getMyPostsApi;

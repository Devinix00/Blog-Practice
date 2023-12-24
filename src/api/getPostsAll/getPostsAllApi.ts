async function getPostsAllApi() {
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_BASE_URL + "/posts",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      next: { tags: ["postsAll"] },
      cache: "no-store",
    }
  );

  const data = await response.json();
  return { data };
}

export default getPostsAllApi;

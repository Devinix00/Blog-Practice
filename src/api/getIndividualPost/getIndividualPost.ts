async function getIndividualPost(postId: string) {
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_BASE_URL + `/posts/post/${postId}`,
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

export default getIndividualPost;

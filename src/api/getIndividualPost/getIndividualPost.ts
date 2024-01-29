async function getIndividualPost(postId: string) {
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_BASE_URL + `/posts/getpost?postId=${postId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    }
  );

  const data = await response.json();
  return { data };
}

export default getIndividualPost;

"use server";
import { revalidatePath, revalidateTag } from "next/cache";

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

  revalidateTag("postsAll");
  revalidatePath("/createPostPage");

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

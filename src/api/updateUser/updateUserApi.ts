import tokenManager from "@/utils/tokenManager";

interface IInputValues {
  nickName: string;
  newPw: string;
  userImg?: string;
}

async function updateUserApi(userData: IInputValues) {
  const accessToken = tokenManager.getToken();
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_BASE_URL + "/user/update",
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

export default updateUserApi;

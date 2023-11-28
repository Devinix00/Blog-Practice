async function authApi<T>(userData: T, apiUrl: string) {
  const response = await fetch(process.env.NEXT_PUBLIC_API_BASE_URL + apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  const data = await response.text();
  return { response, data };
}

export default authApi;

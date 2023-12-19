"use client";

import UserMain from "@/components/organisms/userMain/UserMain";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function UserTemplate(): JSX.Element {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <UserMain />
    </QueryClientProvider>
  );
}

export default UserTemplate;

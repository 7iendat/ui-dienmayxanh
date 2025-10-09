import { QueryClient } from "@tanstack/react-query";

export const getQueryClient = () => {
  const queryClient = new QueryClient();
  return queryClient;
};

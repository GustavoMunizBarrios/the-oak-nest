import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";

/* This hook get the current user and stored into cache, so then it will not have to be re-downloaded each time that is necessary */
export function useUser() {
  const { isLoading, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  return { isLoading, user, isAuthenticated: user?.role === "authenticated" };
}

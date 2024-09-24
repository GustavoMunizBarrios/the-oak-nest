import { useQuery } from "@tanstack/react-query";
import { getcabins } from "../../services/apiCabins";

export function useCabins() {
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ["cabins"],
    queryFn: getcabins,
  });

  return { isLoading, error, cabins };
}

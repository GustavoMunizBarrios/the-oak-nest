import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export function useBookings() {
  const [searchParams] = useSearchParams();

  //FILTER
  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };

  // SORT
  const sortByRaw = searchParams.get("sortBy") || "startDate-desc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };

  //PAGINATION
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const {
    isLoading,
    data: { data: bookings, count } = {}, // we need "{ }" at the end for prevent null data
    error,
  } = useQuery({
    queryKey: ["bookings", filter, sortBy, page], // when the "filter" or "sortBy" changes then will re-fetch the data
    queryFn: () => getBookings({ filter, sortBy, page }),
  });

  return { isLoading, error, bookings, count };
}

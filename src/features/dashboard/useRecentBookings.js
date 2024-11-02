/* This custom React hook is designed to fetch recent booking data from an API based on a specified number of days. The hook uses React Router for handling URL search parameters and React Query for managing asynchronous data fetching and caching. */

import { subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";
import { getBookingsAfterDate } from "../../services/apiBookings";
import { useQuery } from "@tanstack/react-query";

export function useRecentBookings() {
  const [searchParams] = useSearchParams();

  const numDays = !searchParams.get("last")
    ? 7
    : Number(searchParams.get("last"));
  // "subDays" is utility function to subtract a specified number of days from a given date.
  // subDays(current date, number of days that you want to substract)
  const queryDate = subDays(new Date(), numDays).toISOString();

  const { isLoading, data: bookings } = useQuery({
    queryFn: () => getBookingsAfterDate(queryDate),
    queryKey: ["bookings", `last-${numDays}`],
  });
  return { isLoading, bookings };
}

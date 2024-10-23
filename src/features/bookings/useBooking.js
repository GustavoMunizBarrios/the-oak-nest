import { useQuery } from "@tanstack/react-query";
import { getBooking } from "../../services/apiBookings";
import { useParams } from "react-router-dom";

export function useBooking() {
  const { bookingId } = useParams();

  const {
    isLoading,
    data: booking,
    error,
  } = useQuery({
    queryKey: ["booking", bookingId], //// when the "bookingId" changes then will re-fetch the data
    queryFn: () => getBooking(bookingId),
    retry: false, // This tells React Query not to retry fetching the data if the query fails.
  });

  return { isLoading, error, booking };
}

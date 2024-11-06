import BookingTable from "../features/bookings/BookingTable";
import BookingTableOperations from "../features/bookings/BookingTableOperations";
import AddNewBooking from "../features/bookings/AddNewBooking";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Bookings() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All bookings</Heading>
        <BookingTableOperations />
        <AddNewBooking>Add New Booking</AddNewBooking>
      </Row>

      <BookingTable />
    </>
  );
}

export default Bookings;

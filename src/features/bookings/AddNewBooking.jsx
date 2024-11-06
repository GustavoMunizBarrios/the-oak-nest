import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import NewBookingForm from "./NewBookingForm";

export default function AddNewBooking() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="addBooking-form">
          <Button>Add new Booking</Button>
        </Modal.Open>
        <Modal.Window name="addBooking-form">
          <NewBookingForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

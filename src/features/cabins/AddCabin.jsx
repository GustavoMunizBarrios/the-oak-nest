import { useState } from "react";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";

export default function AddCabin() {
  const [showForm, setShowForm] = useState(false);
  return (
    <div>
      <Button onClick={() => setShowForm((show) => !show)}>
        Add new cabin
      </Button>
      {showForm && <CreateCabinForm />}
    </div>
  );
}

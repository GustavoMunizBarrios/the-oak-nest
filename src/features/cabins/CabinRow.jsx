/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers";
import CreateCabinForm from "./CreateCabinForm";
import { useDeleteCabin } from "./useDeleteCabin";
import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";
import { useCreateCabin } from "./useCreateCabin";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;
const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;
const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;
const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;
const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;
/* Format of the object "cabin":
[
{created_at: "2024-09-21T04:00:51.315885+00:00"
description: "nice"
discount: 100
id: 9
image: "https://wiezaqxevgqussnagtlm.supabase.co/storage/v1/object/public/cabin-images/0.8454090865511756-cabin-003.jpg"
maxCapacity: 4
name: "003"
regularPrice: 400}
]

*/

export default function CabinRow({ cabin }) {
  const { isDeleting, deleteCabin } = useDeleteCabin();

  const { isCreating, createCabin } = useCreateCabin();

  function handleDuplicate() {
    createCabin({
      name: `Copy of ${cabin.name}`,
      description: cabin.description,
      regularPrice: cabin.regularPrice,
      maxCapacity: cabin.maxCapacity,
      discount: cabin.discount,
      image: cabin.image,
    });
  }

  return (
    <TableRow role="row">
      <Img src={cabin.image} />
      <Cabin>{cabin.name}</Cabin>
      <div>Fits up to {cabin.maxCapacity}</div>
      <Price>{formatCurrency(cabin.regularPrice)}</Price>
      <Discount>
        {cabin.discount ? formatCurrency(cabin.discount) : <span>&mdash;</span>}
      </Discount>

      <div>
        <button disabled={isCreating} onClick={handleDuplicate}>
          <HiSquare2Stack />
        </button>

        <Modal>
          <Modal.Open opens="edit">
            <button>
              <HiPencil />
            </button>
          </Modal.Open>

          <Modal.Window name="edit">
            <CreateCabinForm cabinToEdit={cabin} />
          </Modal.Window>

          <Modal.Open>
            <button onClick={() => deleteCabin(cabin.id)} disabled={isDeleting}>
              <HiTrash />
            </button>
          </Modal.Open>

          <Modal.Window>
            <ConfirmDelete resourceName="cabins" disabled={isDeleting} />
          </Modal.Window>
        </Modal>
      </div>
    </TableRow>
  );
}

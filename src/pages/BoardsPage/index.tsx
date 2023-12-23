import { useState } from "react";
import Modal from "./Modal";
import TopBar from "./TopBar";

export default function BoardsPage() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <TopBar openModal={() => setShowModal(true)} />
      <h3>boards</h3>
      {showModal && <Modal closeModal={() => setShowModal(false)}/>}
    </>
  );
}

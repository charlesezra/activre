import React from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "./modal.css";

export default function ModalPopup({ open, setOpen }) {
  return (
    <div>
      <Modal open={open} onClose={() => setOpen(false)} className="container">
        <h2>Login</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
          hendrerit risus, sed porttitor quam.
        </p>
      </Modal>
    </div>
  );
}

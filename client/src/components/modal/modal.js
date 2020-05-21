import React from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

const modalStyles = {
  modal: {
    background: "lightblue",
    margin: "auto auto",
    width: "350px",
    "max-width": "400px",
    border: "2px solid white",
  },
};

export default function ModalPopup({ open, setOpen }) {
  return (
    <div>
      <Modal open={open} onClose={() => setOpen(false)} styles={modalStyles}>
        <h2 className="title">Login</h2>
        <div className="Inputs">
          <p>Email:</p>
          <input placeholder="Enter Email..."></input>
          <p>Password:</p>
          <input placeholder="Enter Password..."></input>
          <button>Confirm</button>
        </div>
        <button>Login with Google</button>
      </Modal>
    </div>
  );
}

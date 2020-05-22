import React from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "./modal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const modalStyles = {
  modal: {
    background: "#dbedf3",
    margin: "auto auto",
    width: "350px",
    height: "375px",
    "max-width": "400px",
    "max-height": "450px",
    border: "3px solid #404b69",
    "border-radius": "10px",
  },
  closeButton: {
    outline: "none",
    border: "2px solid black",
    padding: "2px 2px",
    "box-shadow": "0px 1px black",
    "border-radius": "100px",
  },
};

export default function ModalPopup({ open, setOpen }) {
  return (
    <div>
      <Modal open={open} onClose={() => setOpen(false)} styles={modalStyles}>
        <div className="container">
          <div className="title">
            <h2>Log in</h2>
          </div>
          <div className="google">
            <FontAwesomeIcon icon={faGoogle} className="icon" />
            <button>Login with Google</button>
          </div>
          <div className="inputs">
            <p>Email:</p>
            <input placeholder="Enter Email..." type="text" />
            <p>Password:</p>
            <input placeholder="Enter Password..." type="password" />
            <a href="/">Forgot Password</a>
          </div>
          <div className="confirm">
            <button className="modalButton">Confirm</button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

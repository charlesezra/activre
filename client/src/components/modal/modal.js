import React from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "./modal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const loginStyles = {
  modal: {
    background: "#dbedf3",
    margin: "auto auto",
    width: "350px",
    height: "385px",
    maxWidth: "400px",
    maxHeight: "450px",
    border: "3px solid #404b69",
    borderRadius: "10px",
  },
  closeButton: {
    outline: "none",
    border: "2px solid black",
    padding: "2px 2px",
    boxShadow: "0px 1px black",
    borderRadius: "100px",
  },
};

const signupStyles = {
  modal: {
    background: "#dbedf3",
    margin: "auto auto",
    width: "350px",
    height: "475px",
    maxWidth: "400px",
    maxHeight: "600px",
    border: "3px solid #404b69",
    borderRadius: "10px",
  },
  closeButton: {
    outline: "none",
    border: "2px solid black",
    padding: "2px 2px",
    boxShadow: "0px 1px black",
    borderRadius: "100px",
  },
};

export default function Popup({ open, setOpen, sign, setSign }) {
  if (open && !sign) {
    return (
      <div>
        <Modal
          open={open}
          onClose={() => (setOpen(false), setSign(false))}
          styles={loginStyles}
        >
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
              <input className="text-input" placeholder="Enter Email..." type="text" />
              <p>Password:</p>
              <input className="text-input" placeholder="Enter Password..." type="password" />
              <a href="/">Forgot Password</a>
            </div>
            <div className="confirm">
              <button className="modalButton">Confirm</button>
            </div>
          </div>
        </Modal>
      </div>
    );
  } else if (open && sign) {
    return (
      <div>
        <Modal
          open={open}
          onClose={() => (setOpen(false), setSign(false))}
          styles={signupStyles}
        >
          <div className="container">
            <div className="title">
              <h2>Sign Up</h2>
            </div>
            <div className="google">
              <FontAwesomeIcon icon={faGoogle} className="icon" />
              <button>Sign up with Google</button>
            </div>
            <div className="inputs">
              <p>Username:</p>
              <input className="text-input" placeholder="Enter Username..." type="text" />
              <p>Email:</p>
              <input className="text-input" placeholder="Enter Email..." type="text" />
              <p>Password:</p>
              <input className="text-input" placeholder="Enter Password..." type="password" />
              <p>Confirm Password:</p>
              <input className="text-input" placeholder="Confirm Password..." type="password" />
            </div>
            <div className="confirm">
              <button className="modalButton">Confirm</button>
            </div>
          </div>
        </Modal>
      </div>
    );
  } else {
    return <div></div>;
  }
}

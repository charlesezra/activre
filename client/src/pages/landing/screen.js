import React, { useState } from "react";
import "./startup.css";
import ModalPopup from "../../components/modal/modal";

export default function Landing() {
  const [open, setOpen] = useState(false);
  return (
    <div className="startup-container">
      <div className="startup-header">
        <p>activRE</p>
      </div>

      <div className="startup-body">
        <div className="description">
          <p>
            Active Recall Studying Technique will help you remember discrete
            facts and information in no time. Try it out now! Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
        </div>
        <div className="login-button">
          <button onClick={() => setOpen(true)} className="button">
            Login
          </button>
        </div>
        <div className="signup-button">
          <button className="button">Sign Up</button>
        </div>
      </div>

      <div className="startup-footer">
        <p>
          <b>© 2020 activRE, All Rights Reserved</b>
        </p>
      </div>

      <div className="modal-container">
        <ModalPopup setOpen={setOpen} open={open} />
      </div>
    </div>
  );
}

import React, { useState } from "react";
import "./startup.css";
import Popup from "../../components/modal/modal";

export default function Landing() {
  const [open, setOpen] = useState(false);
  const [sign, setSign] = useState(false);
  return (
    <div className="startup-container">
      <div className="startup-header">
        <p>activRE</p>
      </div>
      <div className="modal-container">
        <Popup setOpen={setOpen} open={open} setSign={setSign} sign={sign} />
      </div>
      <div className="startup-body">
        <div className="description">
          <p>
            <b>Most Effective Studying Technique!</b>
            <br />
            • Study shows that the active recall studying technique will help
            you remember discrete facts and information with ease. <br />
            • This website is dedicated to giving everyone an easy way to
            practice this technique. Try it out now! <br /> • Creating modules,
            Study with Spaced Repetition, Success in your field!
          </p>
        </div>
        <div className="login-button">
          <button
            onClick={() => (setOpen(true), setSign(false))}
            className="button"
          >
            Log in
          </button>
        </div>
        <div className="signup-button">
          <button
            onClick={() => (setOpen(true), setSign(true))}
            className="button"
          >
            Sign Up
          </button>
        </div>
      </div>

      <div className="startup-footer">
        <p>
          <b>© 2020 activRE, All Rights Reserved</b>
        </p>
      </div>
    </div>
  );
}

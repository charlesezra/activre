import React, { useState } from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUserCircle } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <div className="header-flexbox">
      <div className="header-container">
        <div className="message">
          <p>Welcome, [username]</p>
        </div>
        <div className="search">
          <form>
            <input
              type="text"
              className="search-input"
              placeholder="Search Modules || Users"
            ></input>
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
          </form>
        </div>
        <div className="profile">
          <button onClick={()=>setOpen(!open)}>
            <FontAwesomeIcon icon={faUserCircle} className="header-icon" />
          </button>
          <ul className={!open ? "dropdown" : "dropdown-active"}>
            <li className="dropdown-item">
              <a href="#">Account</a>
            </li>
            <li className="dropdown-item">
              <a href="#">Help Center</a>
            </li>
            <li className="dropdown-item">
              <a href="#">Policy</a>
            </li>
            <li className="dropdown-item">
              <a href="/">Log Out</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import "./sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCog, faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { faStar, faAngleDoubleRight, faPlus } from "@fortawesome/free-solid-svg-icons";

export default function Sidebar({ open, setOpen }) {
  return (
    <div className="sidebar-container">
      <nav className={!open ? "navbar" : "navbar-active"}>
        <ul className="navbar-nav">
          <li className="logo">
            <a href="#" className="nav-link">
              <span className="link-text">activRE</span>
              <button onClick={()=>setOpen(!open)}>
                <FontAwesomeIcon icon={faAngleDoubleRight} className="icon" />
              </button>
            </a>
          </li>
          <li className="nav-item">
            <a href="/home" className="nav-link">
              <FontAwesomeIcon icon={faHome} className="icon" />
              <span className="link-text">Home</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <FontAwesomeIcon icon={faFolderOpen} className="icon" />
              <span className="link-text">Modules</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <FontAwesomeIcon icon={faStar} className="icon" />
              <span className="link-text">Favorites</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="/create" className="nav-link">
              <FontAwesomeIcon icon={faPlus} className="icon" />
              <span className="link-text">Create</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <FontAwesomeIcon icon={faCog} className="icon" />
              <span className="link-text">Settings</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

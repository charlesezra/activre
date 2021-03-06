import React, { useState } from "react";
import "./main.css";
import Sidebar from "../../components/sidebar/sidebar";
import Header from "../../components/header/header";

export default function Main() {
  const [open, setOpen] = useState(true);
  return (
    <div className="main-container">
      <div className="sidebar-container">
        <Sidebar open={open} setOpen={setOpen} />
      </div>
      <div className={!open ? "content" : "content-menu"}>
        <div className="header">
          <Header />
        </div>
        <div className="home-body">
          <p className="recent">Recent Modules</p>
        </div>
      </div>
    </div>
  );
}

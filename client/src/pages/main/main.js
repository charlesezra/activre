import React, { useState } from "react";
import "./main.css";
import Sidebar from "../../components/sidebar/sidebar";

export default function Main() {
  const [open, setOpen] = useState(true);
  return (
    <div className="main-container">
      <Sidebar open={open} setOpen={setOpen}/>
      <div className={!open ? "content" : "content-menu"}>
        <p>Hello! my name is Charles</p>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import "./create.css";
import Sidebar from "../../components/sidebar/sidebar";
import Header from "../../components/header/header";
import Form from "../../components/form/form";

export default function Create() {
  const [open, setOpen] = useState(true);
  return (
    <div className="create-container">
      <div className="sidebar-container">
        <Sidebar open={open} setOpen={setOpen} />
      </div>
      <div className={!open ? "content" : "content-menu"}>
        <div className="create-header">
          <Header />
        </div>
        <div className="create-body">
            <div className="create-title-container">
                <p className="create-title">Create A New Module</p>
            </div>
            <div className="form-container">
                <Form />
            </div>
            <div className="preview-container">
                
            </div>
        </div>
      </div>
    </div>
  );
}

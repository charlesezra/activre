import React from "react";
import "./form.css";

export default function Form() {
    return(
        <div className="form-container">
            <form>
                <div className="title-input-container">
                    <label>Title</label>
                </div>
                <div className="topic-input-container">
                    <label>Topic Name</label>
                </div>
                <div className="question-input-container">
                    <label>Question</label>
                </div>
                <div className="answer-input-container">
                    <label>Answer</label>
                </div>
                <div className="color-input-container">
                    <label>Level of Memorization</label>
                </div>
                <div className="scope-input-container">
                    <label>Private/Public</label>
                </div>
            </form>
        </div>
    );
}
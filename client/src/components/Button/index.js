import React from "react";
import "./button.css";
function Button({text}) {
    const btnTitle = Array.from(text);
    return (
        <a className="btn btn-solid btn-white" href="" target="_self">
        <span className="btnTitle">{btnTitle}</span>
    </a>
    )
};

export default Button;
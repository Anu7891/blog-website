"use client";
import React from "react";
import Styles from "./button.module.css"

const Button = ({ className = "", buttonText = "", handleClick }) => {
    return(
        <button className={`${Styles?.btnClass} ${className}`} onClick={handleClick}>
            {buttonText && <p className={Styles?.btnText}>{buttonText}</p>}
        </button>
    )

}

export default Button;
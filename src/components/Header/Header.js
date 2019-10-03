import React from "react";
import "./style.css";
import logo from "../Header/gijoe_black.jpg";

function Header() {
    return (
        
        <header className="header">
        <img src={logo} alt="gijoe"/>
        </header>

    )
};

export default Header;
import React from "react";
import "./style.css";

function Nav(props) {
    return (
        <nav className="navbar">
            <ul>
                <li className="brand">
                    <a href="/clicky-app">Clicky Game</a>
                </li>

                <li className="feedback">{props.feedback}</li>
                <li className="score">
                    Score: {props.score} &nbsp;|&nbsp; 
                    Top Score: {props.highScore}
                    </li>
            </ul>

        </nav>


    );
}

export default Nav;
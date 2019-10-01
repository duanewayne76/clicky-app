import React from "react";
import "./style.css";

function Nav(props) {
    return (
        <nav className="navbar">
            <ul>
                <li className="brand">
                    <a href="/">Clicky Game</a>
                </li>

                <li className="feedback">{props.feedback}</li>
                <li className="score">
                    Score: {props.score}
                    Top Score: {props.highScore}
                    </li>
            </ul>

        </nav>


    );
}

export default Nav;
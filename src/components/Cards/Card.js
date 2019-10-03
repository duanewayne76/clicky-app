import React from "react";
import "./style.css";

function Card(props) {
    return (
        <div className="card">
            <button className="img-container" onClick={props.onClick}>
                <img alt={props.name} src={props.image} />
            </button>
        </div>


    );
}

export default Card;

// Source url: http://www.3djoes.com/the-gi-joe-yearbook-a-visual-index-of-carded-figures.html
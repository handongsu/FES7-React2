import React from "react";
import './Feeling.css';

const Feeling = (props) => {
    return(
        <div className="container">
            <h2>{props.mood ? `기분이 : ${props.mood}` : '아직 선택하지 않았어요...'}</h2>
        </div>

    )
}

export default Feeling;
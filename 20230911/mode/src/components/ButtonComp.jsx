import React from "react";
import './ButtonComp.css';
const ButtonComp = (props) => {

    const onitemClick = () => {
        props.setCurrentMood(props.mood)
    }

    return(
        <li>
            <button className="btn-item" onClick={onitemClick}>기분이 : {props.mood}</button>
        </li>
    )
}

export default ButtonComp;
import React from "react";
import ButtonComp from "./ButtonComp";
import './Buttons.css';

const Buttons = (props) =>{
      const menus = ["좋아요! 😃", "정말 좋아요! 🤭", "최고에요! 😄", "미쳤어요!! 🤪"];

    return(
        <ul className="container-list">
            {menus.map((moodEl, index)=>
                <ButtonComp key={index} mood={moodEl} setCurrentMood = {props.setCurrentMood}/>
            )}
        </ul>
        
    );
}

export default Buttons;
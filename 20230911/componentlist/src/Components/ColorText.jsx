import React from "react";

const ColorText = (props) => {
    const color = {color: props.color}
    return(
        <>
        <h3 style={color}>색이 바뀌어요!</h3>
        </>
    )
}

export default ColorText;
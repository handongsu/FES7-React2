import React, { useState } from "react";
//default 로 뺀 것은 중괄호 없이 쓰고, export만으로 밖으로 빼면 {}안에 넣어서 import한다.
function Resume(props){
    const [like, setLike] = useState(false);

    function clickFunc(){
        if(like === true) setLike(false);
        else setLike(true);
        
    }

    return(
        <div style={{border: "1px solid black" }}>
            <h1>{props.name} 자기소개서</h1>
            <h2>{props.hello}</h2>
            <h3>취미: {props.hobby}</h3>
            <h3>좋아하는 음식: {props.food}</h3>
            <h3 >좋아하는 색: <span style={{color: 'blue'}}>{props.color}</span></h3>
            <button onClick={clickFunc}>Like</button>
            {like && <span>Like</span>}
        </div>
    )
}

export default Resume;
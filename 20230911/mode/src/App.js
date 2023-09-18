import Buttons from "./components/Buttons";
import Feeling from "./components/Feeling";
import React, { useState } from "react";

function App() {

  const [currentMood, setCurrentMood] = useState();

  return (
    <div>
      <h1>오늘의 기분을 선택해주세요</h1>
      <div>
        <Buttons setCurrentMood = {setCurrentMood}/>
      <Feeling mood={currentMood}/>
      </div>
     
    </div>
  );
}

export default App;

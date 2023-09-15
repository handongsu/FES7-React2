import React from "react";
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <img className="titleImage" alt="title" src="img/Frame.png" />
      <img className="timeImage" alt="time" src="img/시계.png"/>
    </div>
  )
}

export default Header;
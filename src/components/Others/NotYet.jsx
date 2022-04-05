import React from "react";
import "./style.css";

const NotYet = ({ type, message, imgSrc }) => {
  return (
    <div className="working-container">
      <img className="scale" src={imgSrc} alt="Singer" />
      <h2>No {type} Yet</h2>
      <p>{message}</p>
    </div>
  );
};

export default NotYet;

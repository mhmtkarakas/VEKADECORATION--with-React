import React from "react";
import "./Card.css";

const Card = ({ icon, title, description }) => {
  return (
    <div className="custom-card">
      <div className="icon-wrapper">{icon}</div>
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{description}</p>
    </div>
  );
};

export default Card;

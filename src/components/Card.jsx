import React from "react";
import { Link } from "react-router-dom";

const Card = ({ name, url, description, imageURL }) => {
  return (

    <div className="card">
      <h1>CARD</h1>
      <h2>{name}</h2>
      <a href={url} target="_blank" rel="noopener noreferrer">
      <p>{description}</p>
      {imageURL && <img src={imageURL} alt={`${name}'s image`} />}
        Visitar canal
      </a>
    </div>
  );
};

export default Card;

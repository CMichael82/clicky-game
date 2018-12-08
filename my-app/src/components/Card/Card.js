import React from "react";
import "./Card.css";

const Card = props => (
    <div className="dogImage img-container">
      <img src={props.image} />
    </div>
		
 );

export default Card;

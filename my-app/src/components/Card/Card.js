import React from "react";
import "./Card.css";

const Card = props => (
	<div className="row display-cards">
	<div className="col">
    <div className="dogDiv img-container">
      <img className="dogImage img-fluid" src={props.image} key={props.id} alt=""/>
    </div>
		</div>
	</div>
		
 );

export default Card;

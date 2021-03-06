import React from "react";
import "./Navbar.css";

const Navbar = props => (
	
	<nav className="navbar">
		<div className="container">
			<div className="brand">
				<img className="logo" src="./images/paw.jpg" alt=" "></img>
			</div>
			<div className="header">
			 <h1 className="title">TOP DOG!</h1>
			 <h5><em>(A Clicky Game)</em></h5>
			</div>
			<ul className="navbar-nav">
			<li className="nav-item">SCORE: {props.score} </li>
			<li className="nav-item">TOP SCORE: {props.topScore}</li>
		</ul>

		</div>
	</nav>
);

export default Navbar;
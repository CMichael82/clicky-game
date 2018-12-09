import React from "react";
import "./Navbar.css";

const Navbar = props => (
	
	<nav className="navbar">
		<div className="container">
			<div className="brand">
				<img className="logo" src="./images/paw.jpg"></img>
			</div>
			<div className="header">
			 <h1 className="title">TOP DOG!</h1>
			 <h6><em>(A Clicky Game)</em></h6>
			</div>
			<ul className="navbar-nav">
			<li className="nav-item">Score: </li>
			<li className="nav-item">Top Score: </li>
		</ul>

		</div>
	</nav>
);

export default Navbar;
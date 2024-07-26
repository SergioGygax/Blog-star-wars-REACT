import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3 ">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 ms-5">Star Wars Data</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary h1 me-5">Favorites</button>
				</Link>
			</div>
		</nav>
	);
};

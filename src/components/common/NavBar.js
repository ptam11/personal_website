import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css';
import logo from '../../img/logo_word.png'

class NavBar extends Component {
	render() {
		return (
			<nav className="NavBar navbar navbar-expand-sm">
				<NavLink className="navbar-brand" activeClassName="active" exact to="#">
					<img src={logo} className="NavBar-logo img-fluid" alt="logo"></img>
				</NavLink>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    			<span class="navbar-toggler-icon"></span>
  			</button>
				<div className="collapse navbar-collapse" id="navbarText">
					<ul className="navbar-nav ml-auto flex-row">
						<li className="nav-item">
							<NavLink className="nav-link" activeClassName="active" exact to="#">
								Timeline
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" activeClassName="active" exact to="#">
								About Me
							</NavLink>
						</li>	
						<li className="nav-item">
							<NavLink className="nav-link" activeClassName="active" exact to="#">
								Projects
							</NavLink>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default NavBar;

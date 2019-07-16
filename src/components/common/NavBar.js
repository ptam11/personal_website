import React, { Component } from 'react';
// import { Link, NavLink } from 'react-router-dom';
import './NavBar.css';
import logo from '../../img/logo_word.png'

class NavBar extends Component {
	render() {
		return (
			<nav className="NavBar navbar navbar-dark navbar-expand-md fixed-top" id="NavBar">
				<a className="navbar-brand" href="#cover">
					<img src={logo} className="NavBar-logo img-fluid navbar-brand" alt="logo"></img>
				</a>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
    			<span className="navbar-toggler-icon"></span>
  			</button>
				<div className="collapse navbar-collapse text-right" id="navbarSupportedContent">
					<ul className="navbar-nav ml-auto text-left">
						<li className="nav-item">
							<a className="nav-link " href="#about"> ABOUT ME </a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#timeline"> THE JOURNEY </a>
						</li>	
						<li className="nav-item dropdown">
        			<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="false" aria-expanded="false">
          			PROJECTS
        			</a>
							<div className="dropdown-menu" aria-labelledby="navbarDropdown">
								<a className="dropdown-item" href="#jumpOffCampus">JumpOffCampus Inc.</a>
								<div className="dropdown-divider"></div>
								<a className="dropdown-item" href="#jobly">Jobly (LinkedIn)</a>
								<a className="dropdown-item" href="#warbler">Warbler (Twitter)</a>
								<a className="dropdown-item" href="#gaDataScience">HK IPO Data Science</a>
							</div>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#contact">CONTACT ME </a>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default NavBar;

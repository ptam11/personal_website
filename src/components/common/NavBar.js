import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css';
import logo from '../../img/logo_word.png'

class NavBar extends Component {
	render() {
		return (
			<nav className="NavBar navbar navbar-expand-sm">
				<img src={logo} className="NavBar-logo img-fluid navbar-brand" alt="logo"></img>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    			<span class="navbar-toggler-icon"></span>
  			</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ml-auto flex-row">
						<li className="nav-item">
							<a className="nav-link" href="#about">
								ABOUT ME
							</a>
						</li>
						<li><b>|</b></li>
						<li className="nav-item">
							<a className="nav-link" href="#timeline">
								THE JOURNEY
							</a>
						</li>	
						<li><b>|</b></li>
						<li class="nav-item dropdown">
        			<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          			PROJECTS
        			</a>
							<div class="dropdown-menu" aria-labelledby="navbarDropdown">
								<a class="dropdown-item" href="#jumpOffCampus">JumpOffCampus Inc.</a>
								<div class="dropdown-divider"></div>
								<a class="dropdown-item" href="#jobly">Jobly (LinkedIn)</a>
								<a class="dropdown-item" href="#gaDataScience">HK IPO Data Science</a>
							</div>
						</li>
						<li><b>|</b></li>
						<li className="nav-item">
							<a className="nav-link" href="#contact">
								CONTACT ME
							</a>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default NavBar;

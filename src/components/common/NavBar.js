import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css';
import logo from '../../logo.jpeg'

class NavBar extends Component {
	render() {
		return (
			<nav className="Navigation navbar navbar-expand-sm">
				<NavLink className="navbar-brand" activeClassName="active" exact to="#">
					<img src={logo} className="NavBar-logo img-fluid" alt="logo"></img>
				</NavLink>
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
			</nav>
		);
	}
}

export default NavBar;

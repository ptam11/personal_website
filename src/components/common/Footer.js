import React, { Component } from 'react';
import './Footer.css';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Footer extends Component {
	render() {
		return (
			<nav class="Footer fixed-bottom navbar-light bg-light">
				<ul className="Footer navbar-nav">
          <li className="nav-item">
						<a className="nav-link" href="https://github.com/ptam11">
							<FontAwesomeIcon className='Footer-github' icon={faGithub} /> 
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="https://github.com/ptam11">
							<FontAwesomeIcon className='Footer-linkedin' icon={faLinkedin} /> 
						</a>
					</li>
        </ul>
			</nav>
		);
	}
}

export default Footer;

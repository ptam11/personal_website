import React, { Component } from 'react';
import './Footer.css';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFile, faAddressCard } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Footer extends Component {
	render() {
		return (
			<nav class="navbar fixed-bottom navbar-light flex-column align-content-start Footer">
				<a className="nav-link" href="https://www.linkedin.com/in/parcotam/">
				<FontAwesomeIcon className='Footer-link Footer-linkedin' icon={faLinkedin} />
				</a>
				<a className="nav-link" href="https://github.com/ptam11">
					<FontAwesomeIcon className='Footer-link Footer-github' icon={faGithub} /> 
				</a>
				<a className="nav-link" href="https://drive.google.com/file/d/1A8dEHOPYnCbmcXM9XE-O5AGQ3w5X8ifn/view?usp=sharing" >
					<FontAwesomeIcon className='Footer-link Footer-resume' icon={faFile} /> 
				</a>
				<a className="nav-link" href="https://github.com/ptam11">
					<FontAwesomeIcon className='Footer-link Footer-contact' icon={faAddressCard} /> 
				</a>
			</nav>
		);
	}
}

export default Footer;

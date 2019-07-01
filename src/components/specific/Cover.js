import React, { Component } from 'react';
import './Cover.css';
import NavBar from '../common/NavBar';

class Cover extends Component {
	render() {
		return (
			<div className='Cover'>
				<NavBar/>
				<div className='Cover-content d-flex justify-content-center align-items-center'>
					<div className='Cover-text border-rounded'>
						<h1>P A R C O   T A M</h1>
						<h3>H O N G   K O N G      x      C A N A D A</h3>
						<h3>S O F T W A R E   E N G I N E E R      x      F I N A N C E</h3>
						<div className='Cover-text-bg'></div>

					</div>
				</div>
      </div>
		);
	}
}

export default Cover;

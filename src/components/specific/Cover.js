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
						<h1>PARCO TAM</h1>
						<h3>HONG KONG / CANADA  </h3>
						<h3>SOFTWARE ENGINEER X DATA ANALYST</h3>
						<div className='Cover-text-bg'></div>

					</div>
				</div>
      </div>
		);
	}
}

export default Cover;

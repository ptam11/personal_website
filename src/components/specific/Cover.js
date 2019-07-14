import React, { Component } from 'react';
import './Cover.css';
import NavBar from '../common/NavBar';

class Cover extends Component {
	render() {
		return (
			<div className='Cover' id="cover">
				<div className='Cover-text-bg'></div>
				{/* <NavBar/> */}
				<div className='Cover-content d-flex justify-content-center align-items-center'>
					<div className='Cover-text border-rounded'>
						<div className='Cover-text-words'>
							<h1>PARCO TAM</h1>
							<h5>HONG KONG <b><span className='dot'>&#183;</span></b> CANADA  </h5>
							<h5>SOFTWARE ENGINEER <b><span className='dot'>&#183;</span></b> DATA ANALYST</h5>
						</div>
					</div>
				</div>
      </div>
		);
	}
}

export default Cover;

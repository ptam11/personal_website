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
						<div className='Cover-text-bg'></div>
						<div className='Cover-text-words'>
							<h1>PARCO TAM</h1>
							<h5>HONG KONG <span className='dot'>&#183;</span> CANADA  </h5>
							<h5>SOFTWARE ENGINEER <span className='dot'>&#183;</span> DATA ANALYST</h5>
						</div>
					</div>
				</div>
      </div>
		);
	}
}

export default Cover;

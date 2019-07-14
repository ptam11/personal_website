import React, { Component } from 'react';
import './Contact.css';
import SectionHeader from './SectionHeader'


class Contact extends Component {
	render() {
		return (
			<div className='Contact d-flex justify-content-center mb-5' id="contact">
				<div className='Contact-container container'>
					<SectionHeader title='C O N T A C T' />
					<div className='Contact-row row d-flex justify-content-center'>
						<p><b>ptam1556@gmail.com </b> </p>
					</div>
					<div className='Contact-row row d-flex justify-content-center'>
						<div className='Contact-col col-sm-6 d-flex justify-content-center align-content-start'>			
							<div className="LI-profile-badge"  data-version="v1" data-size="large" data-locale="en_US" data-type="vertical" data-theme="dark" data-vanity="parcotam">
								<a className="LI-simple-link" href='https://www.linkedin.com/in/parcotam?trk=profile-badge'>
									Parco Tam
								</a>
							</div>
						</div>
					</div>
      	</div>
			</div>
		);
	}
}

export default Contact;

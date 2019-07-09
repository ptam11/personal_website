import React, { Component } from 'react';
import './Contact.css';
import SectionHeader from './SectionHeader'


class Contact extends Component {
	render() {
		return (
			<div className='Contact d-flex flex-column justify-content-center' id="contact">
				<div className='Contact-container container'>
					<SectionHeader title='C O N T A C T' />
					<div className='Contact-row row'>
						<div className='Contact-col col-12 '>
							<div className='Contact-pic m-auto'/>
						</div>
						<div className='Contact-col col-md  text-center'>			
							<div class="LI-profile-badge text-left"  data-version="v1" data-size="large" data-locale="en_US" data-type="horizontal" data-theme="dark" data-vanity="parcotam"><a class="LI-simple-link" href='https://www.linkedin.com/in/parcotam?trk=profile-badge'>Parco Tam</a></div>						</div>
					</div>
				</div>
      </div>
		);
	}
}

export default Contact;

import React, { Component } from 'react';
import './ProjectDetails.css';
import SectionHeader from './SectionHeader'
import jumpOffCampusHome from '../../img/jumpOffCampus/home.png'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class ProjectOverview extends Component {
	render() {
		return (
			<div className='ProjectDetails d-flex justify-content-spread align-items-spread'>
				<div className="container">
					<div className="ProjectDetails-individual row">
						<div className="col-12"> 
							<h3><b>JumpOffCampus Inc.</b></h3>
							<h5>
								Ruby 
								<b><span className='dot'> &#183; </span></b>
								Rails
								<b><span className='dot'> &#183; </span></b>
								PostgreSQL 
								<b><span className='dot'> &#183; </span></b>
								RSpec 
								<b><span className='dot'> &#183; </span></b>
								FactoryBot (RSpec testing)
								<b><span className='dot'> &#183; </span></b>
								Husky (Continuous Integration)
								<b><span className='dot'> &#183; </span></b>
								Stripe
								<b><span className='dot'> &#183; </span></b>
								Twilio
								<b><span className='dot'> &#183; </span></b>
								GeoCoder (Google Map)
								<b><span className='dot'> &#183; </span></b>
								Google Analytics
								<b><span className='dot'> &#183; </span></b>
								Mixpanel 
								<b><span className='dot'> &#183; </span></b>
								Ahoy
								<b><span className='dot'> &#183; </span></b>
								imageUploader
								<b><span className='dot'> &#183; </span></b>
								Devise
								<b><span className='dot'> &#183; </span></b>
								CanCanCan (Admin)
								<b><span className='dot'> &#183; </span></b>
								HAML
							</h5>
							<br/>
							<div className='text-left'>
								<b>CLIENT REQUEST: </b>
								<p>Convert old Rails 2 app to Rails 5 app since client needs newer libraries like React.</p>
								<b>USERS: </b>
								<p>60,000</p>
								<b>BUSINESS: </b>
								<p>Connect landlords and students for subleasing rooms and finding roommates.</p>
								<b>TASK: </b>
								<p>Learnt Ruby and Rails for the company project and collaborated with a team of 6 and scrum master. Rebuilt backend models with data validators for property listings, roommates, universities administrators and payments. 
									Created migration files and schemas to structure the database on PostgreSQL. Created frontend routes, forms and HAML templates for users to interact. Designed tests on controller routes and model. Setted up continuous integration to check Git commits  Connected analytics tools like Google Analytics for business intelligence purposes. Connected other libraries such as Stripe and Twilio for specialized features.  
								</p>
							</div>
						</div>
						<div  className='col-12 m-auto'>
							<Carousel autoPlay={true} infiniteLoop={true} centerMode={false} width="100%">
									<div>
											<img src={jumpOffCampusHome} />
											<p className="legend">Legend 1</p>
									</div>
									<div>
											<img src={jumpOffCampusHome} />
											<p className="legend">Legend 2</p>
									</div>
									<div>
											<img src={jumpOffCampusHome} />
											<p className="legend">Legend 3</p>
									</div>
							</Carousel>
						</div>
					</div>
					<div className="ProjectDetails-individual mt-5 mb-5">
						<h3><b>Jobly (LinkedIn)</b></h3>
						<h5>
							React.js 
							<b><span className='dot'> &#183; </span></b>
							Redux <b><span className='dot'> &#183; </span></b>
							Express
							</h5>
						<div>
						</div>
						<Carousel autoPlay={true} infiniteLoop={true} centerMode={false} width="80vw">
								<div>
										<img src={jumpOffCampusHome} />
										<p className="legend">Legend 1</p>
								</div>
								<div>
										<img src={jumpOffCampusHome} />
										<p className="legend">Legend 2</p>
								</div>
								<div>
										<img src={jumpOffCampusHome} />
										<p className="legend">Legend 3</p>
								</div>
						</Carousel>
					</div>
				</div>
      </div>
		);
	}
}

export default ProjectOverview;

import React, { Component } from 'react';
import './Home.css';
import Cover from './Cover'
import About from './About'
import Timeline from './Timeline'
import ProjectOverview from './ProjectOverview';
import Contact from './Contact';
import Footer from '../common/Footer';
import NavBar from '../common/NavBar';



class Home extends Component {
	render() {
		return (
			<div>
				<NavBar/>
				<div className='Home ml-0 mr-0 p-0'data-spy="scroll" data-target="#NavBar" data-offset="0">
					<Cover />
					<About className="mb-5"/>
					<Timeline/>
					<ProjectOverview />
					<Contact className="mb-5"/>
					<Footer />
				</div>
			</div>
		);
	}
}

export default Home;

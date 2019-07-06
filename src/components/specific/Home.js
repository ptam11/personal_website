import React, { Component } from 'react';
import './Home.css';
import Cover from './Cover'
import About from './About'
import Timeline from './Timeline'
import ProjectOverview from './ProjectOverview';
import ProjectDetails from './ProjectDetails';
import Footer from '../common/Footer';

class Home extends Component {
	render() {
		return (
			<div className='Home ml-0 mr-0 p-0'>
        <Cover />
				<About />
				<Timeline />
				<ProjectOverview />
				<ProjectDetails />
				<Footer />
      </div>
		);
	}
}

export default Home;

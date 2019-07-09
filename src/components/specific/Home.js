import React, { Component } from 'react';
import './Home.css';
import Cover from './Cover'
import About from './About'
import Timeline from './Timeline'
import ProjectOverview from './ProjectOverview';
import Contact from './Contact';
import Footer from '../common/Footer';


class Home extends Component {
	render() {
		return (
			<div className='Home ml-0 mr-0 p-0'>
        <Cover />
				<About className="mb-5"/>
				<Timeline />
				<ProjectOverview />
				<Contact className="mb-5"/>
				<Footer />
      </div>
		);
	}
}

export default Home;

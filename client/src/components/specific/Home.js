import React, { Component } from 'react';
import './Home.css';
import Cover from './Cover'
import About from './About'
import Timeline from './Timeline'
import ProjectOverview from './ProjectOverview';
import Contact from './Contact';
import Footer from '../common/Footer';
import NavBar from '../common/NavBar';
import ReactLoading from 'react-loading';

const e5 = getComputedStyle(document.documentElement).getPropertyValue('--electric-blue-5').slice(-7)



class Home extends Component {
	state = { loading: true};
  componentDidMount() {
    this.interval = setTimeout(() => {
			this.setState({loading: false});        
    }, 3000);
  }
	render() {
		const {loading} = this.state;
		let loadScreen;
		const load = (
			<div className='Home ml-0 mr-0 p-0 h-100 d-flex justify-content-center align-content-center'>
					<ReactLoading type="spinningBubbles" color={e5} height={'10%'} width={'10%'} className="mt-auto mb-auto"/>
			</div>
		);
		const content = (				
			<div className='Home ml-0 mr-0 p-0'data-spy="scroll" data-target="#NavBar" data-offset="0">
				<Cover />
				<About className="mb-5"/>
				<Timeline/>
				<ProjectOverview />
				<Contact className="mb-5"/>
				<Footer />
			</div>
		)

		if(loading) {
			loadScreen = load
		} else {
			loadScreen = (<span />)
		}
		return (
			<div>
				<NavBar/>
				{loadScreen}
				{content}
			</div>
		);
	}
}

export default Home;

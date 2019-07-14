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
    }, 2000);
  }
	render() {
		const {loading} = this.state;
		let homeBody;
		const load = (
			<div className='Home ml-0 mr-0 p-0 d-flex h-100 justify-content-center align-content-center'>
				<ReactLoading type="spinningBubbles" color={e5} height={'10%'} width={'10%'} className="mt-auto mb-auto"/>
			</div>
		);

		if(loading) {
			homeBody = load;
		} else {
			homeBody = (				
				<div className='Home ml-0 mr-0 p-0'data-spy="scroll" data-target="#NavBar" data-offset="0">
					<Cover />
					<About className="mb-5"/>
					<Timeline/>
					<ProjectOverview />
					<Contact className="mb-5"/>
					<Footer />
				</div>
			)
		}
		return (
			<div>
				<NavBar/>
				{homeBody}
			</div>
		);
	}
}

export default Home;

import React, { Component } from 'react';
import './About.css';
import SectionHeader from './SectionHeader'
import aboutInfo from './aboutInfo/aboutInfo'
// import DotList from './DotList'
import DescriptionList from './DescriptionList'


class About extends Component {
	render() {
		// const { motivationListArr, valueListArr, desListArr} = aboutInfo;
		const {desListArr} = aboutInfo;

		return (
			<div className='About d-flex flex-column justify-content-spread align-items-spread pb-5' id="about">
				<div className='bgOpaque'> </div>
				<div className='About-container container'>
					<SectionHeader title='A B O U T' />
					<div className='About-row row'>
						<div className='About-col col-12 '>
							<div className='About-pic m-auto'/>
						</div>
						<div className='About-col col-12 text-left'>
							{/* <div>
								<b>MOTIVATION:</b>  
								<DotList listArr={motivationListArr} />
							</div>
							<div>
								<b>VALUES:</b>  
								<DotList listArr={valueListArr} />
							</div> */}
							<DescriptionList desListArr={desListArr}/>
						</div>
					</div>
				</div>
      </div>
		);
	}
}

export default About;

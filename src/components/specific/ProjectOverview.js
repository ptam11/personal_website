import React, { Component } from 'react';
import './ProjectOverview.css';
import SectionHeader from './SectionHeader'
import ProjectDetail from './ProjectDetail';
import {title, techListArr, desListArr, carouselListArr, subListObj} from './projectInfo/jumpOffCampus'


class ProjectOverview extends Component {
	render() {
		return (
			<div className='ProjectOverview d-flex flex-column justify-content-spread align-items-spread'>
				<SectionHeader title='P R O J E C T S'/>
				< ProjectDetail title={title} techListArr={techListArr} desListArr={desListArr} carouselListArr={carouselListArr} subListObj={subListObj}/>
				<div>{subListObj[title]}</div>
				{/* <div className='ProjectOverview-container container'>
					<div className='ProjectOverview-row row'>
						<div className='ProjectOverview-col col-lg-6 mb-5' align="center">
							<div className='ProjectOverview-pic' style={{backgroundImage: `url(${jumpOffCampusHome})`}}/>
						</div>
						<div className='ProjectOverview-col col-lg-6 mb-5' align="center">
							<div className='ProjectOverview-pic' style={{backgroundImage: `url(${jumpOffCampusHome})`}}/>
						</div>
						<div className='ProjectOverview-col col-lg-6 mb-5' align="center">
							<div className='ProjectOverview-pic' style={{backgroundImage: `url(${jumpOffCampusHome})`}}/>
						</div> */}

					{/* </div>
				</div> */}
      </div>
		);
	}
}

export default ProjectOverview;

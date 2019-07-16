import React, { Component } from 'react';
import './ProjectOverview.css';
import SectionHeader from './SectionHeader'
import ProjectDetail from './ProjectDetail';
import jumpOffCampus from './projectInfo/jumpOffCampus'
import jobly from './projectInfo/jobly'
import gaDataScience from './projectInfo/gaDataScience'
import warbler from './projectInfo/warbler'

class ProjectOverview extends Component {
	render() {
		return (
			<div className='ProjectOverview d-flex flex-column justify-content-spread align-items-spread' id="projectOverview">
				<SectionHeader title='P R O J E C T S'/>
				< ProjectDetail projectObj={jumpOffCampus} id="jumpOffCampus"/>
				< ProjectDetail projectObj={jobly} id="jobly"/>
				< ProjectDetail projectObj={warbler} id="warbler"/>
				< ProjectDetail projectObj={gaDataScience} id="gaDataScience"/>
      </div>
		);
	}
}

export default ProjectOverview;

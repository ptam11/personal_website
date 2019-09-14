import React, { Component } from 'react';
import './WebsiteList.css';
import { faGithub} from '@fortawesome/free-brands-svg-icons';
import { faWindowMaximize} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// const websiteListArr =[
// 	{type: "website", address: "https://jobly-parco-frontend.herokuapp.com"},
// 	{type: "github", address: "https://github.com/ptam11/jobly_fullStack"},
// ];


class WebsiteList extends Component {
	render() {
		const { listArr } = this.props;
		const iconMap = {
			"website": faWindowMaximize,
			"github": faGithub
		}
		let list = (listArr.map((val, ind) => {
					let res;
					res = <a href={val["address"]} key={ind}  title={val.type} className='WebsiteList-link'>
						<FontAwesomeIcon className='WebsiteList-icon' icon={iconMap[val.type]} />  {val.type}
					</a>
					return res;
				})
		)

	// 	<a className="nav-link" href="https://drive.google.com/file/d/1A8dEHOPYnCbmcXM9XE-O5AGQ3w5X8ifn/view?usp=sharing" >
	// 	<FontAwesomeIcon className='Footer-link Footer-resume' icon={faFile} /> 
	// </a>
		return (
			<div className="WebsiteList">
				{list}
      </div>
		);
	}
}

export default WebsiteList;

import React, { Component } from 'react';
import './ProjectDetail.css';
import DotList from './DotList'
import SubList from './SubList'
import DescriptionList from './DescriptionList'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


class ProjectDetail extends Component {
	render() {
		const { projectObj, id } =  this.props;
		const { title, carouselListArr, techListArr, desListArr, subListObj } = projectObj;
		const carouselHtmlList = (carouselListArr.map((page, ind) => {
			return (
				<div key={ind}>
					<p className="legend" style={{opacity: 0.7, fontSize: "2.5vh"}}>{page.des}</p>
					<img src={page.src} alt={page.src}/>
					
				</div>
			)
		}))
		return (
			<div className='ProjectDetail d-flex justify-content-spread align-items-spread' id={id}>
				<div className="container">
					<div className="ProjectDetail-individual row">
						<div className="col-12"> 
							<h3 className="ProjectDetail-proj-title">{title}</h3>
							<div className="ProjectDetail-tech-list"><DotList listArr={techListArr} /></div>
							<br/>
							<div  className='ProjectDetail-carousel col-12 m-auto'>
								<Carousel autoPlay={true} infiniteLoop={true} centerMode={false} width="100%" interval={3500}>
										{carouselHtmlList}
								</Carousel>
							</div>
							<DescriptionList desListArr={desListArr}/>
							<SubList title={subListObj.title} subListArr={subListObj.subListArr}/>
							<br/>
						</div>
					</div>
				</div>
      </div>
		);
	}
}

export default ProjectDetail;

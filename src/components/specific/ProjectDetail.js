import React, { Component } from 'react';
import './ProjectDetail.css';
import DotList from './DotList'
import SubList from './SubList'
import DescriptionList from './DescriptionList'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


class ProjectDetail extends Component {
	render() {
		const { title, carouselListArr, techListArr, desListArr, subListObj } = this.props;
		const carouselHtmlList = (carouselListArr.map((page, ind) => {
			return (
				<div key={ind}>
					<p className="legend" style={{opacity: 0.7, fontSize: "3vh"}}>{page.des}</p>
					<img src={page.src} alt={page.src}/>
					
				</div>
			)
		}))
		return (
			<div className='ProjectDetail d-flex justify-content-spread align-items-spread'>
				<div className="container">
					<div className="ProjectDetail-individual row">
						<div className="col-12"> 
							<h3><b>{title}</b></h3>
							<div className="ProjectDetail-tech-list"><DotList listArr={techListArr} /></div>
							<br/>
							<DescriptionList desListArr={desListArr}/>
							<SubList title={subListObj.title} subListArr={subListObj.subListArr}/>
							<br/>
						</div>
						<div  className='ProjectDetail-carousel col-12 m-auto'>
							<Carousel autoPlay={true} infiniteLoop={true} centerMode={false} width="100%" interval={3800}>
									{carouselHtmlList}
							</Carousel>
						</div>
					</div>
				</div>
      </div>
		);
	}
}

export default ProjectDetail;

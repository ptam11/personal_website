import React, { Component } from 'react';
import './About.css';
import SectionHeader from './SectionHeader'


class About extends Component {
	render() {
		return (
			<div className='About d-flex flex-column justify-content-spread align-items-spread'>
				<div className='bgOpaque'> </div>
				<div className='About-container container'>
					<SectionHeader title='A B O U T' />
					<div className='About-row row'>
						<div className='About-col col-12 '>
							<div className='About-pic m-auto'/>
						</div>
						<div className='About-col col-12 text-left'>
							
							<div>
								<b>MOTIVATION:</b>  
								<p>Efficiency, Impact </p>
							</div>
							<div>
								<b>VALUES:</b>  
								<p>Genuineness, Continual Growth, Teamwork </p>
							</div>
							<div>
								<b>QUOTE:</b>  
								<p>"The world is one big data problem" </p>
							</div>
							<div>
								<b>DREAM:</b>  
								<p>Work for a company that improves the way we live intelligently through technology. </p>
							</div>
							<div>
								<b>DATA ANALYST @BLOOMBERG:</b>  
								<p>I loved my job at Bloomberg. Through the 7 years, I applied what I learnt from school, worked with product managers, R&D and sales to improve the product and defended essential financial data that impacted millions of clients. </p>
							</div>
							<div>
								<b>LESSON LEARNED:</b>  
								<p>Joined the company 7 years ago, thinking data was about manually punching in numbers. Left the company with fascination over the massive database architecture and network of data flows behind the scenes  </p>
							</div>
							<div>
								<b>WHY I LEFT MY JOB</b>  
								<p>End of 2017, I was sponsored to take a part-time data science course at General Assembly. The method and logic in approaching and analyzing problems changed my way of thinking. I want to equip myself with the tools to solve big problems.</p>
							</div>
						</div>
					</div>
				</div>
      </div>
		);
	}
}

export default About;

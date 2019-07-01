import React, { Component } from 'react';
import './About.css';
import SectionHeader from './SectionHeader'


class About extends Component {
	render() {
		return (
			<div className='About d-flex flex-column justify-content-spread align-items-spread'>
				<SectionHeader title='A B O U T' underline='_________' />
				<div className='About-container container'>
					<div className='About-row row'>
						<div className='About-col col-md-6 '>
							<div className='About-pic'/>
						</div>
						<div className='About-col col-md-6 text-left'>
							
							<p><b>M O T I V A T I O N:</b> GREATER EFFIENCY, IMPACT</p>
							<p><b>V A L U E S:</b> TEAMWORK, GENUINE, </p>
							<p><b>Q U O T E:</b> "THE WORLD IS ONE BIG DATA PROBLEM" </p>
							<div>
								<b>D R E A M</b>  
								<p>Work for a company that improves the way we live intelligently through technology. </p>
							</div>
							<div>
								<b>D A T A   A N A L Y S T   @ B L O O M B E R G :</b>  
								<p>I loved my job at Bloomberg. Through the 7 years, I applied what I learnt from school, worked with product managers, R&D and sales to improve the product and defended essential financial data that impacted millions of clients. </p>
							</div>
							<div>
								<b>B I G G E S T   L E S S O N:</b>  
								<p>Joined the company 7 years ago, thinking data was about manually punching in numbers. Left the company with fascination over the massive database architecture and network of data flows behind the scenes  </p>
							</div>
							<div>
								<b>W H Y   I   L E F T   M Y   J O B</b>  
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

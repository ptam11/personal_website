import React, { Component } from 'react';
import './Timeline.css';
import HorizontalTimeline from 'react-horizontal-timeline'
import SectionHeader from './SectionHeader'

const VALUES = [ 'May-2011', 'Dec-2011', 'Apr-2012', 'Dec-2012', 'Mar-2018'];
const e4 = getComputedStyle(document.documentElement).getPropertyValue('--electric-blue-4').slice(-7)
const e1 = getComputedStyle(document.documentElement).getPropertyValue('--electric-blue-1').slice(-7)

class Timeline extends Component {
  state = { value: 0, previous: 0 };
	// TODO: simulate interval click
  render() {
    return (
      <div className='Timeline'>
        {/* Bounding box for the Timeline */}
        <SectionHeader title='H I S T O R Y' underline='_____________' />
        <div className='Timeline-line'>
          <HorizontalTimeline
            index={this.state.value}
            indexClick={(index) => {
              this.setState({ value: index, previous: this.state.value });
            }}
            values={ VALUES } 
						styles={ {background: e1, foreground: e4, outline: '#ffffff'} }/>
        </div>
        <div className='Timeline-des text-center'>
          {/* any arbitrary component can go here */}   
					<div className="card bg-dark text-white">
						<div className="card-body">
							<h4 className="card-title">Graduate from Babson College</h4>
							<p className="card-text">- {VALUES[this.state.value]}</p>
							<p className="card-text">Cum Laude</p>
						</div>
						{/* <img className="card-img-bottom img-fluid" src="https://yt3.ggpht.com/a/AGF-l78hnCQF5Yy4RYjaoCPocSL19FE9pZjjfcb-Pw=s900-mo-c-c0xffffffff-rj-k-no" alt="Card image"/> */}
					</div> 
        </div>
      </div>
    );
  }
}

export default Timeline;
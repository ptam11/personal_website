import React, { Component } from 'react';
import './Timeline.css';
import HorizontalTimeline from 'react-horizontal-timeline'
import SectionHeader from './SectionHeader'
import babson from '../../img/timeline/babson.jpg'
import timelineInfo from './timelineInfo/timelineInfo'

const VALUES = timelineInfo.map((obj) => obj.date);
const e4 = getComputedStyle(document.documentElement).getPropertyValue('--electric-blue-4').slice(-7)
const e1 = getComputedStyle(document.documentElement).getPropertyValue('--electric-blue-1').slice(-7)

class Timeline extends Component {
  state = { value: 0, previous: 0 };
  componentDidMount() {
    this.interval = setInterval(() => {
      // console.log(this.state.number, this.props.counter)
      if (this.state.value + 1 >= VALUES.length) {
        this.setState({value: 0, previous: this.state.value});        
      } else {
        this.setState({value: this.state.value + 1, previous: this.state.value});        
      }
    }, 3000);
  }
  
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    const {date, src, title, text} = timelineInfo[this.state.value]
    return (
      <div className='Timeline' id="timeline">
        {/* Bounding box for the Timeline */}
        <SectionHeader title='J O U R N E Y' />
        <div className='Timeline-line'>
          <HorizontalTimeline
            index={this.state.value}
            indexClick={(index) => {
              this.setState({ value: index, previous: this.state.value });
            }}
            getLabel={function(d) { return `${d.slice(0, 8)}`; }}
            values={ VALUES } 
						styles={ {background: e1, foreground: e4, outline: '#ffffff'} }/>
        </div>
        <div className='Timeline-des text-center'>
					<div className="card  text-white">
						<div className="card-body">
							<h5 className="card-title">{title}</h5>
							<p className="card-text">{text}</p>
						</div>
            {/* <img className="card-img-bottom img-fluid" src={src} alt="Card image"/> */}
            <div className="card-img-bottom img-fluid" style={{backgroundImage: 'url('+ src + ')'}} alt="Card image"/>
					</div> 
        </div>
      </div>
    );
  }
}

export default Timeline;
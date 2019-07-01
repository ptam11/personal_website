import React, { Component } from 'react';

class SectionHeader extends Component {
	render() {
		return (	
      <div className='section-header'>
        <h1 className='section-header-title'>{this.props.title}</h1>
        <h1 className='section-header-underline'>{this.props.underline}</h1>
      </div>
		);
	}
}

export default SectionHeader;

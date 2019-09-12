import React, { Component } from 'react';
import './DotList.css';

class DotList extends Component {
	render() {
		const { listArr } = this.props;
		const dot = <b><span className='dot'> &#183; </span></b>
		let list = (listArr.map((val, ind) => {
					let res;
					ind !== listArr.length - 1 ? res = <span key={ind}>{val}{dot}</span> : res = <span key={ind}>{val}</span>
					return res;
				})
		)
		return (
			<div className="DotList">
				{list}
      </div>
		);
	}
}

export default DotList;

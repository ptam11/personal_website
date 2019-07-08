import React, { Component } from 'react';
import './SubList.css';

class SubList extends Component {
	render() {
		const { title, subListArr } = this.props;
		let list = (subListArr.map((val, ind) => {
					return <li key={ind} className="SubList-item"><b>- </b>{val}</li>
				})
		)

		return (
			<div className="SubList text-left">
				<b>{title}</b>
				<ul className="SubList-list">
					{list}
				</ul>
      </div>
		);
	}
}

export default SubList;

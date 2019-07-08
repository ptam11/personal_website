import React, { Component } from 'react';

class DescriptionList extends Component {
	render() {
		const { desListArr } = this.props;
		let list = (desListArr.map((val, ind) => {
					return <div key={ind}><b>{val.title}</b><p>{val.des}</p></div>
				})
		)

		return (
			<div className="DescriptionList text-left">
				{list}
      </div>
		);
	}
}

export default DescriptionList;

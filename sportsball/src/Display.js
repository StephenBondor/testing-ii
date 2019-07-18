import React from 'react';

class Display extends React.Component {
	render() {
		return (
			<div>
				<div>BALLS: {this.props.balls}</div>
				<div>STRICKS: {this.props.stricks}</div>
			</div>
		);
	}
}

export default Display;

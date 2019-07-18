import React from 'react';

class Dashboard extends React.Component {
	strickHandler = () => {
		this.props.increaseStricks();
	};
	ballHandler = () => {
		this.props.increaseBalls();
	};
	foulHandler = () => {
		if (this.props.stricks !== 2) this.props.increaseStricks();
	};
	resetCountHandler = () => {
		this.props.resetCount();
	};

	render() {
		return (
			<div>
				<button onClick={() => this.strickHandler()}>STRICK</button>
				<button onClick={() => this.ballHandler()}>BALL</button>
				<button onClick={() => this.foulHandler()}>FOUL</button>
				<button onClick={() => this.resetCountHandler()}>HIT</button>
			</div>
		);
	}
}

export default Dashboard;

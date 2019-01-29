import React from 'react';

class Dashboard extends React.Component {
	strickHandler = () => {
		// console.log('strick!');
		this.props.increaseStricks();
	};

	ballHandler = () => {
		// console.log('ball!');
		this.props.increaseBalls();
	};
	foulHandler = () => {
		// console.log('foul!');
		this.props.increaseStricks();
	};
	resetCountHandler = () => {
		// console.log('Hit!');
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

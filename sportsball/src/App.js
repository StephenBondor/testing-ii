import React, {Component} from 'react';
import Dashboard from './Dashboard';
import Display from './Display';

class App extends Component {
	state = {
		balls: 0,
		stricks: 0
	};

	increaseBalls = () => {
		console.log('Ball!');
		let count = this.state.balls;
		if (count !== 3) count++;
		else count = 0;
		this.setState({
			balls: count
		});
	};

	increaseStricks = () => {
		console.log('strick!');
		let count = this.state.stricks;
		if (count !== 2) count++;
		else count = 0;
		this.setState({
			stricks: count
		});
	};

	resetCount = () => {
		console.log('Reset');
		this.setState({balls: 0, stricks: 0});
	};

	render() {
		return (
			<div className='App'>
				<Display
					balls={this.state.balls}
					stricks={this.state.stricks}
				/>
				<Dashboard
					increaseBalls={this.increaseBalls}
					increaseStricks={this.increaseStricks}
					resetCount={this.resetCount}
				/>
			</div>
		);
	}
}

export default App;

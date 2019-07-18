import React, {Component} from 'react';
import Dashboard from './Dashboard';
import Display from './Display';

class App extends Component {
	state = {
		balls: 0,
		stricks: 0
	};

	increaseBalls = () => {
		let count = this.state.balls;
		if (count !== 3) {
			count++;
			this.setState({
				balls: count
			});
		} else this.resetCount();
	};

	increaseStricks = () => {
		let count = this.state.stricks;
		if (count !== 2) {
			count++;
			this.setState({
				stricks: count
			});
		} else this.resetCount();
	};

	resetCount = () => {
		this.setState({balls: 0, stricks: 0});
	};

	render() {
		return (
			<div className='app' data-testid='app'>
				<Display
					balls={this.state.balls}
					stricks={this.state.stricks}
				/>
				<Dashboard
					increaseBalls={this.increaseBalls}
					increaseStricks={this.increaseStricks}
					resetCount={this.resetCount}
					stricks={this.state.stricks}
				/>
			</div>
		);
	}
}

export default App;

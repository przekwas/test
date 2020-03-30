import React from 'react';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoaded: false,
			pizza: 'cheese'
		};
	}

	handleLogin = () => this.setState({ isLoaded: true });

	handlePizzaChange = (e) => this.setState({ pizza: e.target.value});

	render() {
		if (this.state.isLoaded) {
			return <h1>Logged In! and you're ordering {this.state.pizza}</h1>;
		} else {
			return (
				<div>
					<input value={this.state.pizza} onChange={this.handlePizzaChange} />
					<button onClick={this.handleLogin}>Login!</button>
				</div>
			);
		}
	}
}

export default App;

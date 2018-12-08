import React, { Component } from 'react';
import './App.css';
import Title from './components/Title';
import Wrapper from './components/Wrapper';
import Card from './components/Card';
import dogs from './dogs.json'

class App extends Component {
	state = {
		dogs
	};

	render() {
		return (
			<React.Fragment>
				<Title>Clicky Game</Title>
				<Wrapper>
					{this.state.dogs.map(pooch =>(
						<Card image={pooch.image} />
					))}
				</Wrapper>
			</React.Fragment>
		);
  }
}

export default App;

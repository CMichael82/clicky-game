import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper';
import Result from './components/Result';
import Card from './components/Card';
import dogs from './dogs.json'

class App extends Component {
	state = {
		dogs
	};

	render() {
		return (
			<React.Fragment>
				<Navbar></Navbar>
				<Result>Click on an image to earn points, but don't click on any more than once!</Result>
				<Wrapper>
					{this.state.dogs.map(pooch => (
						<Card image={pooch.image} id={pooch.id} />
					))}
				</Wrapper>
			</React.Fragment>
		);
	}
}

export default App;

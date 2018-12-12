import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper';
import Result from './components/Result';
import Card from './components/Card';
import dogs from './dogs.json'

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			dogs,
			alreadyClicked: [],
			score: 0,
			topScore: 0,
			result: "Click on an image to earn points, but don't click on any more than once!"
		};

		this.checkIfClicked = this.checkIfClicked.bind(this);
	}

	checkIfClicked(id) {
		console.log(id);
		if (this.state.alreadyClicked.indexOf(id) < 0) {
			console.log("I've never been clicked");
			this.setState({
				score: this.state.score + 1,
				result: "YOU GUESSED CORRECTLY"
			});
			this.state.alreadyClicked.push(id);
			this.shuffle(dogs);
			console.log(this.state.alreadyClicked);
			console.log('Score: ', this.state.score);

		} else {
			console.log("I've already been clicked");
			this.setState({
				score: 0,
				alreadyClicked: [],
				result: "YOU GUESSED INCORRECTLY!...START OVER."
			});
			if(this.state.score>this.state.topScore){
				this.setState({topScore: this.state.score});
			}
			this.shuffle(dogs);
			console.log(this.state.alreadyClicked);
			console.log('Score: ', this.state.score);
		}

	}

	shuffle = (arr) => {
		var i,
			j,
			temp;
		for (i = arr.length - 1; i > 0; i--) {
			j = Math.floor(Math.random() * (i + 1));
			temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;
		}
		return arr;
	}

	render() {
		// console.log(this)
		return (
			<React.Fragment>
				<Navbar
					score={this.state.score}
					topScore={this.state.topScore}
				></Navbar>
				<Result result={this.state.result}></Result>
				<Wrapper>
					{this.state.dogs.map(pooch => (
						<Card
							key={"card-" + pooch.id}
							image={pooch.image}
							checkIfClicked={this.checkIfClicked}
							id={pooch.id} />
					))}
				</Wrapper>
			</React.Fragment>
		);
	}
}

export default App;

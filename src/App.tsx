import './index.css';
import { useState } from 'react';
import { ScoreBoard } from './components/ScoreBoard';
import { GameBoard } from './components/GameBoard';
import { RulesButton } from './components/RulesButton';
import { ResultBoard } from './components/ResultBoard';

function returnResult(user: any, house: any) {
	if (user === house) return 'DRAW';
	if (user === 'scissors' && house === 'paper') return 'YOU WIN';
	if (user === 'paper' && house === 'scissors') return 'YOU LOSE';

	if (user === 'paper' && house === 'rock') return 'YOU WIN';
	if (user === 'rock' && house === 'paper') return 'YOU LOSE';

	if (user === 'rock' && house === 'lizard') return 'YOU WIN';
	if (user === 'lizard' && house === 'rock') return 'YOU LOSE';

	if (user === 'lizard' && house === 'spock') return 'YOU WIN';
	if (user === 'spock' && house === 'lizard') return 'YOU LOSE';

	if (user === 'spock' && house === 'scissors') return 'YOU WIN';
	if (user === 'scissors' && house === 'spock') return 'YOU LOSE';

	if (user === 'scissors' && house === 'lizard') return 'YOU WIN';
	if (user === 'lizard' && house === 'scissors') return 'YOU LOSE';

	if (user === 'paper' && house === 'spock') return 'YOU WIN';
	if (user === 'spock' && house === 'paper') return 'YOU LOSE';

	if (user === 'rock' && house === 'scissors') return 'YOU WIN';
	if (user === 'scissors' && house === 'rock') return 'YOU LOSE';

	if (user === 'lizard' && house === 'paper') return 'YOU WIN';
	if (user === 'paper' && house === 'lizard') return 'YOU WIN';

	if (user === 'spock' && house === 'rock') return 'YOU WIN';
	if (user === 'rock' && house === 'spock') return 'YOU LOSE';

	return 'DRAW';
}

const options = ['rock', 'paper', 'scissors'];
const advancedOptions = ['rock', 'paper', 'scissors', 'spock', 'lizard'];

function App() {
	const [isAdvanced, setIsAdvanced] = useState(false);
	const [userSelection, setUserSelection] = useState(null);
	const [houseSelection, setHouseSelection] = useState(null);
	const [score, setScore] = useState(0);

	function changeDifficult() {
		setIsAdvanced((prevState) => !prevState);
		setScore(0);
		setHouseSelection(null);
		setUserSelection(null);
	}

	function calculateScore(userOption: any, houseOption: any) {
		try {
			setScore((prevState) => {
				const winner = returnResult(userOption, houseOption);
				if (winner === 'YOU WIN') return prevState + 1;
				if (winner === 'YOU LOSE') return prevState === 0 ? 0 : prevState - 1;
				return prevState;
			});
		} catch (error) {
			console.log(error);
		}
	}

	function chooseOption(option: any) {
		try {
			setUserSelection(option);

			setTimeout(() => {
				const optionsToChoose = isAdvanced ? advancedOptions : options;
				const newHouseSelection = Math.floor(Math.random() * optionsToChoose.length);

				setHouseSelection(optionsToChoose[newHouseSelection] as any);

				calculateScore(option, optionsToChoose[newHouseSelection]);
			}, 1000);
		} catch (error) {
			console.log(error);
		}
	}

	function playAgain() {
		try {
			setUserSelection(null);
			setHouseSelection(null);
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<div
			className="
      bg-gradient-radial from-background-gradient1 to-background-gradient2
      h-screen
			w-screen
			flex
			flex-col
    ">
			<div
				className="
					flex
					flex-col
					items-center
					xl:mt-6
					w-full
				">
				<ScoreBoard score={score} isAdvanced={isAdvanced} />

				{!userSelection ? (
					<GameBoard isAdvanced={isAdvanced} chooseOption={chooseOption} />
				) : (
					<ResultBoard
						userSelection={userSelection}
						houseSelection={houseSelection}
						playAgain={playAgain}
						returnResult={returnResult}
					/>
				)}
			</div>

			<div
				className="
						mt-auto
						mr-auto
						ml-auto
						mb-12
						lg:mr-10
					">
				<RulesButton isAdvanced={isAdvanced} changeDifficult={changeDifficult} />
			</div>
		</div>
	);
}

export default App;

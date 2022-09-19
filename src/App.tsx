import './index.css';
import { useState } from 'react';
import { ScoreBoard } from './components/ScoreBoard';
import { GameBoard } from './components/GameBoard';
import { RulesButton } from './components/RulesButton';

function App() {
	const [isAdvanced, setIsAdvanced] = useState(false);
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
				">
				<ScoreBoard isAdvanced={isAdvanced} />

				<GameBoard isAdvanced={isAdvanced} />
			</div>

			<div
				className="
						mt-auto
						mr-auto
						ml-auto
						mb-12
					">
				<RulesButton isAdvanced={isAdvanced} />
			</div>
		</div>
	);
}

export default App;

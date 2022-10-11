import { useMemo } from 'react';
import { OptionSelected } from '../OptionSelected';

interface ResultBoardProps {
	userSelection: 'rock' | 'paper' | 'scissors' | 'spock' | 'lizard' | null;
	houseSelection: 'rock' | 'paper' | 'scissors' | 'spock' | 'lizard' | null;
	playAgain: () => void;
	returnResult: (user: any, house: any) => 'YOU WIN' | 'YOU LOSE' | 'DRAW';
}

export function ResultBoard({
	userSelection,
	houseSelection,
	playAgain,
	returnResult,
}: ResultBoardProps) {
	const result = useMemo(
		() => returnResult(userSelection, houseSelection),
		[userSelection, houseSelection]
	);

	return (
		<div
			className={`
				mt-36
				grid
				grid-cols-2
				grid-rows-2
				align-middle
				justify-center
				lg:grid-rows-1
				${houseSelection === null ? 'lg:grid-cols-2 lg:gap-36' : `lg:grid-cols-3 gap-20 lg:gap-24`}
				`}>
			<div className="order-1 lg:scale-150 pointer-events-none">
				<OptionSelected
					title="YOU PICKED"
					optionSelected={userSelection}
					isWinner={result === 'YOU WIN'}
				/>
			</div>

			<div
				className={`
						${
							houseSelection === null
								? 'hidden'
								: `	col-span-2
						order-3
						animate-scale
						flex
						flex-col
						justify-center
						items-center
						gap-5
						lg:order-2
						lg:col-span-1`
						}
						`}>
				<span
					className="
            text-white
            font-barlow
            tracking-wide
            font-bold
            text-6xl
            ">
					{houseSelection !== null && result}
				</span>

				<button
					onClick={playAgain}
					className="
              bg-white
              rounded-md
              text-background-gradient2
              font-barlow
              tracking-wide
              font-semibold
              text-lg
              w-60
              pt-3
              pb-3
              hover:scale-110
              ease-in-out
				      duration-300
            ">
					PLAY AGAIN
				</button>
			</div>

			<div className="order-2 lg:order-3 lg:scale-150 pointer-events-none">
				<OptionSelected
					title="THE HOUSE PICKED"
					optionSelected={houseSelection}
					isWinner={result === 'YOU LOSE'}
				/>
			</div>
		</div>
	);
}

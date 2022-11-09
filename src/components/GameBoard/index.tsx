import { OptionButton } from '../OptionButton';
import triangleBackground from '../../assets/bg-triangle.svg';
import pentagonBackground from '../../assets/bg-pentagon.svg';

interface GameBoardProps {
	isAdvanced: boolean;
	chooseOption: (option: TypeSelection) => void;
}

export function GameBoard({ isAdvanced, chooseOption }: GameBoardProps) {
	if (isAdvanced)
		return (
			<div
				className="
					relative
					w-full
					flex
					justify-center
					mt-32
					xl:mt-36
				">
				<div
					className="
					absolute
					z-10
					sm:scale-75
					-mt-10
					xl:-mt-28
				">
					<OptionButton type="scissors" onClick={() => chooseOption('scissors')} />
				</div>

				<div
					className="
					absolute
					z-10
					sm:scale-75
					mt-7
					-ml-56
					xl:mt-5
					xl:-ml-96
				">
					<OptionButton type="spock" onClick={() => chooseOption('spock')} />
				</div>

				<div
					className="
					absolute
					z-10
					sm:scale-75
					mt-7
					ml-56
					xl:mt-5
					xl:ml-96
				">
					<OptionButton type="paper" onClick={() => chooseOption('paper')} />
				</div>

				<div
					className="
					absolute
					z-10
					sm:scale-75
					mt-36
					-ml-36
					xl:mt-52
					xl:-ml-56
				">
					<OptionButton type="lizard" onClick={() => chooseOption('lizard')} />
				</div>

				<div
					className="
					absolute
					z-10
					sm:scale-75
					mt-36
					ml-36
					xl:mt-52
					xl:ml-56
				">
					<OptionButton type="rock" onClick={() => chooseOption('rock')} />
				</div>

				<img
					className="
						z-0
						object-contain
						w-56
						absolute
						xl:w-80
					"
					src={pentagonBackground}
					alt=""
				/>
			</div>
		);

	return (
		<div
			className="
			relative
			w-full
			flex
			justify-center
			mt-40
			xl:mt-32
		">
			<div
				className="
					absolute
					z-10
					-mt-14
					-ml-44
					xl:-mt-20
					xl:-ml-72
				">
				<OptionButton type="paper" onClick={() => chooseOption('paper')} />
			</div>

			<div
				className="
					absolute
					z-10
					-mt-14
					-mr-44
					xl:-mt-20
					xl:-mr-72
				">
				<OptionButton type="scissors" onClick={() => chooseOption('scissors')} />
			</div>

			<div
				className="
					absolute
					z-10
					mt-24
					xl:mt-40
				">
				<OptionButton type="rock" onClick={() => chooseOption('rock')} />
			</div>

			<img
				className="
						z-0
						object-contain
						w-52
						absolute
						xl:w-80
					"
				src={triangleBackground}
				alt=""
			/>
		</div>
	);
}

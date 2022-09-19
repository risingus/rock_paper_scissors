import { OptionButton } from '../OptionButton';
import triangleBackground from '../../assets/bg-triangle.svg';
import pentagonBackground from '../../assets/bg-pentagon.svg';

interface GameBoardProps {
	isAdvanced: boolean;
}

export function GameBoard({ isAdvanced }: GameBoardProps) {
	if (isAdvanced)
		return (
			<div
				className="
					relative
					w-full
					flex
					justify-center
					mt-32
				">
				<div
					className="
					absolute
					z-10
					-mt-10
				">
					<OptionButton type="scissors" isAdvanced={isAdvanced} />
				</div>

				<div
					className="
					absolute
					z-10
					mt-7
					-ml-56
				">
					<OptionButton type="spock" isAdvanced={isAdvanced} />
				</div>

				<div
					className="
					absolute
					z-10
					mt-7
					ml-56
				">
					<OptionButton type="paper" isAdvanced={isAdvanced} />
				</div>

				<div
					className="
					absolute
					z-10
					mt-36
					-ml-36
				">
					<OptionButton type="lizard" isAdvanced={isAdvanced} />
				</div>

				<div
					className="
					absolute
					z-10
					mt-36
					ml-36
				">
					<OptionButton type="rock" isAdvanced={isAdvanced} />
				</div>

				<img
					className="
						z-0
						object-contain
						w-56
						absolute
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
		">
			<div
				className="
					absolute
					z-10
					-mt-14
					-ml-44
				">
				<OptionButton type="paper" isAdvanced={isAdvanced} />
			</div>

			<div
				className="
					absolute
					z-10
					-mt-14
					-mr-44
				">
				<OptionButton type="scissors" isAdvanced={isAdvanced} />
			</div>

			<div
				className="
					absolute
					z-10
					mt-24
				">
				<OptionButton type="rock" isAdvanced={isAdvanced} />
			</div>

			<img
				className="
						z-0
						object-contain
						w-52
						absolute
					"
				src={triangleBackground}
				alt=""
			/>
		</div>
	);
}

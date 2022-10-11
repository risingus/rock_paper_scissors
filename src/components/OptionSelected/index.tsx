import { OptionButton } from '../OptionButton';

interface OptionSelectedProps {
	optionSelected: 'rock' | 'paper' | 'scissors' | 'spock' | 'lizard' | null;
	title: 'YOU PICKED' | 'THE HOUSE PICKED';
	isWinner: boolean;
}

export function OptionSelected({ optionSelected, title, isWinner }: OptionSelectedProps) {
	return (
		<div
			className="
      flex
      flex-col
      gap-6
      justify-center
      items-center
      ">
			{!optionSelected ? (
				<div
					className="
      rounded-full
      w-28
      h-28
      bg-background-gradient1
			animate-bounce
			xl:order-2
			xl:w-48
			xl:h-48
			xl:z-10
      "
				/>
			) : (
				<div
					className={`
						rounded-full
						xl:order-2
						${isWinner && 'animate-pulse'}
						${isWinner && 'lg:animate-pulseLarge'}
						`}>
					<div className="animate-scale">
						<OptionButton type={optionSelected} onClick={() => {}} />
					</div>
				</div>
			)}

			<span
				className="
        text-white
        font-barlow
        tracking-wide
        font-semibold
        text-lg
				xl:order-1
				xl:z-20
				xl:mb-4
        ">
				{title}
			</span>
		</div>
	);
}

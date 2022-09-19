import rock from '../../assets/icon-rock.svg';
import paper from '../../assets/icon-paper.svg';
import scissors from '../../assets/icon-scissors.svg';
import spock from '../../assets/icon-spock.svg';
import lizard from '../../assets/icon-lizard.svg';

interface OptionButtonProps {
	type: 'rock' | 'paper' | 'scissors' | 'spock' | 'lizard';
	isAdvanced: boolean;
}

const buttonColor = (type: string) => {
	if (type === 'rock') return 'bg-gradient-to-t from-pedra-gradient1 to-pedra-gradient2';
	if (type === 'paper') return 'bg-gradient-radial from-papel-gradient1 to-papel-gradient2';
	if (type === 'scissors') return 'bg-gradient-radial from-tesoura-gradient1 to-tesoura-gradient2';
	if (type === 'spock') return 'bg-gradient-radial from-spock-gradient1 to-spock-gradient2';
	return 'bg-gradient-radial from-lagarto-gradient1 to-lagarto-gradient2';
};

const buttonShadowColor = (type: string) => {
	if (type === 'paper') return 'shadow-papelButton';
	if (type === 'scissors') return 'shadow-tesouraButton';
	if (type === 'rock') return 'shadow-pedraButton';
	if (type === 'spock') return 'shadow-spockButton';
	return 'shadow-lagartoButton';
};

const buttonImg = (type: string) => {
	if (type === 'rock') return rock;
	if (type === 'paper') return paper;
	if (type === 'scissors') return scissors;
	if (type === 'spock') return spock;
	return lizard;
};

export function OptionButton({ type, isAdvanced }: OptionButtonProps) {
	return (
		<div
			className={`
				${buttonColor(type)} 
				rounded-full 
				p-3
				w-32
				h-32
				flex
				justify-center
				items-center
				z-10
				${buttonShadowColor(type)}
				${isAdvanced && 'scale-75'}
			`}>
			<div
				className="
			bg-white
				rounded-full
				w-24
				h-24
				flex
				justify-center
				items-center
				shadow-optionButtonInnerShadow
			">
				<img src={buttonImg(type)} alt="option" className="object-contain w-12 h-12" />
			</div>
		</div>
	);
}

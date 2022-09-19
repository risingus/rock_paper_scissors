import { useState } from 'react';
import { RulesModal } from '../RulesModal';

interface RulesButtonProps {
	isAdvanced: boolean;
}

export function RulesButton({ isAdvanced }: RulesButtonProps) {
	const [isModalRulesOpen, setIsModalRulesOpen] = useState(false);

	function showRules() {
		setIsModalRulesOpen(true);
	}

	function closeRules() {
		setIsModalRulesOpen(false);
	}

	function handleShowRules() {
		setIsModalRulesOpen((prevState) => !prevState);
	}

	return (
		<>
			<button
				onClick={handleShowRules}
				className="
        border-solid
        border-2
        border-white
        rounded-lg
        text-white
        font-barlow
        tracking-wide
        font-semibold
        text-xl
        p-2
        w-32
      ">
				RULES
			</button>

			<RulesModal isAdvanced={isAdvanced} isOpen={isModalRulesOpen} closeModal={closeRules} />
		</>
	);
}

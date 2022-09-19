import rulesBasic from '../../assets/image-rules.svg';
import rulesAdvanced from '../../assets/image-rules-bonus.svg';
import iconClose from '../../assets/icon-close.svg';

interface RulesModalProps {
	isAdvanced: boolean;
	isOpen: boolean;
	closeModal: () => void;
}

export function RulesModal({ isAdvanced, isOpen, closeModal }: RulesModalProps) {
	if (!isOpen) return null;

	return (
		<div
			className="
        w-screen
        h-screen
        absolute
        flex
        flex-col
        items-center
        justify-center
        bg-gray-500
        top-0
        bottom-0
        left-0
        right-0
        z-20
      ">
			<div
				className="
          bg-white
            w-screen
            h-screen
            flex
            flex-col
            p-10
            items-center
        ">
				<div
					className="
            flex
            flex-row
            justify-center
            w-full
            mt-14
          ">
					<span
						className="
              text-text
                text-3xl
                font-barlow
                font-bold
            ">
						RULES
					</span>

					<button
						className="
              ml-auto
              hidden
            "
						onClick={closeModal}>
						x
					</button>
				</div>

				{!isAdvanced && (
					<div
						className="
              mt-28
            ">
						<img
							className="
                object-contain
                w-82
              "
							src={rulesBasic}
							alt="Basic Rules"
						/>
					</div>
				)}

				{isAdvanced && (
					<div
						className="
              mt-28
            ">
						<img
							className="
                object-contain
                w-82
              "
							src={rulesAdvanced}
							alt="Basic Rules"
						/>
					</div>
				)}

				<div
					className="
            mt-auto
            mb-24
          ">
					<button onClick={closeModal}>
						<img src={iconClose} alt="Basic Rules" />
					</button>
				</div>
			</div>
		</div>
	);
}

import logoEasy from '../../assets/logo.svg';
import logoAdvanced from '../../assets/logo-bonus.svg';

interface ScoreBoardProps {
	isAdvanced: boolean;
}

export function ScoreBoard({ isAdvanced }: ScoreBoardProps) {
	return (
		<div
			className="
        w-full
        pr-5
        pl-5
        pt-7
      ">
			<div
				className="
        pr-2
        pl-2
        pt-3
        pb-3
        border-solid
        border-4
        border-headerOutline
        rounded-md
        flex
        justify-between
        items-center
        w-full
      ">
				<div
					className="
				  flex
				  flex-col
				  gap-0
          ml-3
				">
					<img
						className={`
            object-contain
            ${isAdvanced ? 'w-14' : 'w-20'}
            `}
						src={isAdvanced ? logoAdvanced : logoEasy}
						alt="gameLogo"
					/>
				</div>

				<div
					className="
          bg-white
          rounded
          flex
          flex-col
          pt-2
          pr-5
          pl-5
          text-center
        ">
					<span
						className="
            text-score
            font-bold
            font-barlow
            text-xs
            tracking-widest
          ">
						SCORE
					</span>

					<span
						className="
          text-text
          font-bold
          font-barlow
          text-4.5xl
          -mt-3
        ">
						12
					</span>
				</div>
			</div>
		</div>
	);
}

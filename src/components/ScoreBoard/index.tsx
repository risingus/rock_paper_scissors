import logoEasy from '../../assets/logo.svg';
import logoAdvanced from '../../assets/logo-bonus.svg';

interface ScoreBoardProps {
	isAdvanced: boolean;
	score: number;
}

export function ScoreBoard({ isAdvanced, score }: ScoreBoardProps) {
	return (
		<div
			className="
        w-full
        pr-5
        pl-5
        pt-7
        xl:w-4/6
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
            sm:${isAdvanced ? 'w-14' : 'w-20'}
            xl:${isAdvanced ? 'w-32' : 'w-44'}
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
          pb-2
          pr-5
          pl-5
          text-center
          xl:pr-12
          xl:pl-12
          xl:pt-4
          xl:pb-4
        ">
					<span
						className="
            text-score
            font-bold
            font-barlow
            text-xs
            tracking-widest
            xl:text-lg
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
          xl:text-6xl

        ">
						{score}
					</span>
				</div>
			</div>
		</div>
	);
}

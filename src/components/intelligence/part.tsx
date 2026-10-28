import React, {type ReactNode} from "react";

// A titled part inside a chapter: mono kicker, large sub-heading, then the content.
export default function Part({kicker, title, children}: {kicker: string; title: string; children: ReactNode}) {
	return (
		<div className='flex flex-col gap-6'>
			<div className='flex flex-col gap-3'>
				<span className='ed-eyebrow text-ed-accent-ink'>{kicker}</span>
				<h3 className='m-0 max-w-[40rem] text-[clamp(1.5rem,2.2vw,2rem)] font-normal leading-tight tracking-[-0.025em]'>{title}</h3>
			</div>
			{children}
		</div>
	);
}

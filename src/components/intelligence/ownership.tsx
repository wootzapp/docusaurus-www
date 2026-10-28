import React from "react";
import Chapter from "./chapter";

const items = [
	{title: "Your data", copy: "Recorded for your model alone. Enterprise data and lab data sit under separate contracts."},
	{title: "Your model", copy: "The weights, evals, and environments built from your runs are yours to run and improve."},
	{title: "Your perimeter", copy: "The model serves inside your walls, with frontier fallback through your gateway."},
];

export default function Ownership() {
	return (
		<Chapter
			id='ownership'
			tone='tint'
			title='You own the intelligence.'
			titleClassName='ed-statement'
			lede='Your edge is the work your people do today. A model trained on that work belongs to you.'
		>
			<div className='grid grid-cols-1 border-t border-ed-ink/25 sm:grid-cols-3'>
				{items.map((item) => (
					<div
						key={item.title}
						className='flex flex-col gap-3 border-b border-ed-ink/15 py-6 sm:border-b-0 sm:border-r sm:px-6 sm:first:pl-0 sm:last:border-r-0 sm:last:pr-0'
					>
						<span className='ed-eyebrow text-ed-accent-ink'>{item.title}</span>
						<p className='m-0 text-[1.0625rem] leading-relaxed'>{item.copy}</p>
					</div>
				))}
			</div>
		</Chapter>
	);
}

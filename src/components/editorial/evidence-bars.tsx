import React from "react";
import clsx from "clsx";

type Row = {
	label: string;
	value: number;
	display: string;
	detail?: string;
	accent?: boolean;
};

// Horizontal bars on a shared linear axis so lengths stay honest.
export default function EvidenceBars({
	rows,
	max,
	ticks,
	unit = "",
	caption,
	className,
}: {
	rows: Row[];
	max: number;
	ticks: number[];
	unit?: string;
	caption?: string;
	className?: string;
}) {
	return (
		<figure className={clsx("m-0", className)}>
			<div className='flex flex-col gap-5'>
				{rows.map((row) => (
					<div key={row.label} className='flex flex-col gap-2'>
						<div className='flex items-baseline justify-between gap-4'>
							<span className='text-[0.9375rem] font-medium'>{row.label}</span>
							<span className='ed-mono whitespace-nowrap text-[0.8125rem] text-ed-smoke'>
								{row.detail ? `${row.detail} · ` : ""}
								<strong className='font-medium text-ed-ink'>{row.display}</strong>
							</span>
						</div>
						<div className='ed-bar-track' aria-hidden='true'>
							<div
								className={clsx("ed-bar-fill", row.accent && "ed-bar-fill--accent")}
								style={{width: `${Math.max((row.value / max) * 100, 0.6)}%`}}
							/>
						</div>
					</div>
				))}
			</div>
			<div className='relative mt-2 h-5' aria-hidden='true'>
				{ticks.map((tick) => (
					<span
						key={tick}
						className='ed-mono absolute top-0 text-[0.75rem] text-ed-smoke'
						style={{
							left: `${(tick / max) * 100}%`,
							transform: tick === 0 ? "none" : tick === max ? "translateX(-100%)" : "translateX(-50%)",
						}}
					>
						{tick}
						{unit}
					</span>
				))}
			</div>
			{caption ? <figcaption className='ed-mono mt-3 text-[0.75rem] leading-relaxed text-ed-smoke'>{caption}</figcaption> : null}
		</figure>
	);
}

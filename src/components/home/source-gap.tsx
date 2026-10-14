import React, {useState} from "react";
import Specimen from "../editorial/specimen";
import {taskTwo, taskResultsUrl} from "@site/src/data/research";

// Paired view of one real source gap from the published per-task audit.
export default function SourceGap() {
	const [open, setOpen] = useState(false);
	const auditUrl = taskResultsUrl(taskTwo.id, taskTwo.title);

	return (
		<div className='flex flex-col gap-5'>
			<button
				type='button'
				onClick={() => setOpen((value) => !value)}
				aria-expanded={open}
				aria-controls='source-gap-panel'
				className='ed-btn ed-btn--secondary w-fit cursor-pointer'
			>
				<span>{open ? "Hide the source gap" : "See a source gap"}</span>
				<span aria-hidden='true'>{open ? "−" : "+"}</span>
			</button>

			{open ? (
				<div id='source-gap-panel' className='ed-fade-in flex flex-col gap-4'>
					<p className='m-0 text-[0.9375rem] text-ed-graphite'>
						<span className='ed-mono text-ed-ink'>Task {taskTwo.id}</span> · {taskTwo.title} · Criterion: “{taskTwo.criterion}”
					</p>
					<div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2'>
						<Specimen
							title='Screenshot record'
							label={`Audit summary · score ${taskTwo.scores.screenshot}`}
							kind='recorded'
						>
							<dl className='m-0 grid grid-cols-[auto_minmax(0,1fr)] gap-x-4 gap-y-1'>
								{taskTwo.screenshot.map((line) => (
									<React.Fragment key={line.key}>
										<dt className='text-ed-ink'>{line.key}</dt>
										<dd className='m-0'>{line.value}</dd>
									</React.Fragment>
								))}
							</dl>
						</Specimen>
						<Specimen title='W8 DOM-diff Optimized record' label={`Recorded excerpt · score ${taskTwo.scores.dom}`} kind='recorded'>
							<ul className='m-0 flex list-none flex-col gap-1 p-0'>
								{taskTwo.dom.map((line) => (
									<li key={line} className='ed-mark w-fit text-ed-ink'>
										{line}
									</li>
								))}
							</ul>
						</Specimen>
					</div>
					<p className='m-0 text-[0.875rem] text-ed-smoke'>
						{taskTwo.note}{" "}
						<a href={auditUrl} target='_blank' rel='noopener noreferrer' className='ed-link'>
							Read the full Task {taskTwo.id} audit ↗
						</a>
					</p>
				</div>
			) : null}
		</div>
	);
}

import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import clsx from "clsx";
import Specimen from "../editorial/specimen";
import {taskNineteen, taskDataUrl} from "@site/src/data/research";

// The same moment of one run, as each recording kept it. Both excerpts are verbatim from the published dataset.
export default function TaskNineteenPair({className, compact = false}: {className?: string; compact?: boolean}) {
	const image = useBaseUrl(taskNineteen.screenshotImage);
	return (
		<figure className={clsx("m-0 flex flex-col gap-3", className)}>
			<div className={clsx("grid grid-cols-1 gap-3", !compact && "md:grid-cols-2")}>
				<Specimen title={taskNineteen.screenshotFile} label='Screenshot run' kind='recorded'>
					<img
						src={image}
						alt={`Screenshot of the PyTorch 2.14.0 release header reading “${taskNineteen.screenshotText}”.`}
						className='block h-auto max-w-full rounded border border-ed-rule'
						loading='lazy'
					/>
				</Specimen>
				<Specimen title={taskNineteen.domFile} label='W8 run' kind='recorded'>
					<span className='ed-mark inline-block text-ed-ink'>{taskNineteen.domText}</span>
				</Specimen>
			</div>
			<figcaption className='ed-mono text-[0.75rem] leading-relaxed text-ed-smoke'>
				Task {taskNineteen.id}, {taskNineteen.title}. Recorded excerpts from the{" "}
				<a href={taskDataUrl(taskNineteen.id, "ss")} target='_blank' rel='noopener noreferrer' className='ed-link'>
					screenshot run
				</a>{" "}
				and the{" "}
				<a href={taskDataUrl(taskNineteen.id, "dom")} target='_blank' rel='noopener noreferrer' className='ed-link'>
					W8 run
				</a>
				.
			</figcaption>
		</figure>
	);
}

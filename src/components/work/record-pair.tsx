import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import clsx from "clsx";
import Specimen from "../editorial/specimen";
import {specimen, taskDataUrl} from "@site/src/data/research";

// The same moment of one run, as each record kept it. Both excerpts are verbatim from the published dataset.
export default function RecordPair({className, compact = false}: {className?: string; compact?: boolean}) {
	const image = useBaseUrl(specimen.screenshotImage);
	return (
		<figure className={clsx("m-0 flex flex-col gap-3", className)}>
			<div className={clsx("grid grid-cols-1 gap-3", !compact && "md:grid-cols-2")}>
				<Specimen title={specimen.screenshotFile} label='Screenshot run' kind='recorded'>
					<img
						src={image}
						alt={`Screenshot of the ${specimen.release} release byline reading “${specimen.screenshotText}”.`}
						className='block h-auto max-w-full rounded border border-ed-rule'
						loading='lazy'
					/>
				</Specimen>
				<Specimen title={specimen.domFile} label='W8 run' kind='recorded'>
					<span className='ed-mark inline-block text-ed-ink'>{specimen.domText}</span>
				</Specimen>
			</div>
			<figcaption className='ed-mono text-[0.75rem] leading-relaxed text-ed-smoke'>
				{specimen.run}, {specimen.task}, {specimen.title}. Recorded excerpts from the{" "}
				<a href={taskDataUrl(specimen.task, "ss", specimen.run)} target='_blank' rel='noopener noreferrer' className='ed-link'>
					screenshot run
				</a>{" "}
				and the{" "}
				<a href={taskDataUrl(specimen.task, "dom", specimen.run)} target='_blank' rel='noopener noreferrer' className='ed-link'>
					W8 run
				</a>
				.{" "}
				<a href={specimen.auditUrl} target='_blank' rel='noopener noreferrer' className='ed-link'>
					Saved audit
				</a>
				.
			</figcaption>
		</figure>
	);
}

import React from "react";
import Chapter from "./chapter";
import CtaLink from "../editorial/cta-link";
import {links} from "@site/src/data/research";

const review = [
	{question: "Where does the model run?", answer: "Your VPC, on-prem, or our managed infrastructure. In each case the model serves inside your perimeter."},
	{question: "What can the sandbox reach?", answer: "Default-deny network policy. Egress is allowed per endpoint, and denied attempts are recorded."},
	{question: "Who approves what ships?", answer: "Your team approves which runs enter training and which model ships."},
	{
		question: "What does the record hold?",
		answer: "Each run keeps its processes, file changes, egress, policy decisions, and page states. Each reward points to its evidence.",
	},
];

// Grey chapter: the review ledger sits in a white, ink-bordered panel like a form.
export default function Security() {
	return (
		<Chapter
			id='security'
			tone='canvas'
			title='Answers for the security review.'
			lede='The hypervisor is open source. The policy, the sandbox boundary, and the record it keeps are there to read before the first call.'
		>
			<div className='border border-ed-ink bg-ed-surface'>
				<div className='ed-eyebrow flex items-center justify-between gap-4 border-b border-ed-ink px-6 py-3 text-ed-smoke lg:px-8'>
					<span>For the review</span>
					<span className='text-ed-accent-ink'>{String(review.length).padStart(2, "0")} answers</span>
				</div>
				<dl className='m-0 px-6 lg:px-8'>
					{review.map((item, index) => (
						<div
							key={item.question}
							className='grid grid-cols-1 gap-3 border-b border-ed-rule py-6 last:border-b-0 lg:grid-cols-12 lg:gap-10'
						>
							<dt className='flex gap-4 text-[1.125rem] font-medium leading-snug tracking-[-0.01em] lg:col-span-5'>
								<span className='ed-mono shrink-0 pt-0.5 text-[0.8125rem] text-ed-accent-ink'>{String(index + 1).padStart(2, "0")}</span>
								<span>{item.question}</span>
							</dt>
							<dd className='m-0 text-[1rem] leading-relaxed text-ed-graphite lg:col-span-7'>{item.answer}</dd>
						</div>
					))}
				</dl>
			</div>
			<div className='mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
				<CtaLink href={links.openrindArchitecture}>Read the runtime architecture</CtaLink>
				<p className='ed-mono m-0 text-[0.75rem] text-ed-smoke'>Built on NVIDIA OpenShell; no NVIDIA endorsement implied.</p>
			</div>
		</Chapter>
	);
}

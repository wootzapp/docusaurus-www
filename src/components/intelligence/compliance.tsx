import React from "react";
import Chapter from "./chapter";
import Part from "./part";

// What W8 Intelligence sells: the record that satisfies a review is the record the model is trained on.
const challenges = [
	{title: "The risk moved from answers to actions.", copy: "An agent writes code, calls APIs, and changes production systems. A review has to account for what ran, where it connected, and what it changed."},
	{title: "Guardrails written in the prompt.", copy: "A rule in the prompt is overwritten by the next prompt. One injection or one compromised tool is enough to walk past it."},
	{title: "Credentials inside the agent.", copy: "Keys in the agent's environment travel with everything the agent reads. A leak needs no exploit, only a request."},
	{title: "A record the agent writes about itself.", copy: "The harness logs what its vendor chose to log, and a model proxy keeps what the model said. Nobody keeps what ran, what was refused, and what the page held."},
	{title: "Training on trust.", copy: "Runs enter training with no record a reviewer can open, so the model inherits every gap in the evidence."},
];

const chain = [
	{step: "Control", copy: "Every action passes policy enforced outside the agent, below the harness."},
	{step: "Record", copy: "Every run keeps its evidence, including what was refused."},
	{step: "Model", copy: "Only approved, evidenced runs enter training. The weights come from a record your reviewers can open, and they are yours."},
];

export default function Compliance() {
	return (
		<Chapter
			id='compliance'
			title='Compliance and security are how the intelligence becomes yours.'
			lede='Agents act on systems, so a review asks where policy is enforced, where credentials live, and what record survives. Answer those questions below the harness, and the record that satisfies the review becomes the training set for a model you own.'
		>
			<div className='flex flex-col gap-16 lg:gap-20'>
				<Part kicker='The challenge' title='Agents act. Their guardrails and their records live in the wrong place.'>
					<ol className='m-0 grid list-none grid-cols-1 border-l border-t border-ed-rule p-0 sm:grid-cols-2 lg:grid-cols-3'>
						{challenges.map((item, index) => (
							<li key={item.title} className='flex flex-col gap-3 border-b border-r border-ed-rule p-5 lg:p-6'>
								<span className='ed-mono text-[0.8125rem] text-ed-accent-ink'>{String(index + 1).padStart(2, "0")}</span>
								<h4 className='m-0 text-[1.125rem] font-medium leading-snug tracking-[-0.01em]'>{item.title}</h4>
								<p className='m-0 text-[0.9375rem] leading-relaxed text-ed-graphite'>{item.copy}</p>
							</li>
						))}
						<li className='flex flex-col justify-end gap-3 border-b border-r border-ed-rule bg-ed-canvas p-5 lg:p-6'>
							<span className='ed-eyebrow text-ed-smoke'>What a review asks for</span>
							<p className='ed-mono m-0 text-[0.8125rem] leading-relaxed text-ed-ink'>Isolation. Policy enforced where the agent cannot reach it. Credentials the agent never holds. A runtime record of what ran and what was refused.</p>
						</li>
					</ol>
				</Part>

				<Part kicker='The offer' title='One record, from control to model.'>
					<div className='bg-ed-accent-tint p-6 text-ed-ink sm:p-8 lg:p-10'>
						<ol className='m-0 grid list-none grid-cols-1 gap-8 p-0 lg:grid-cols-3 lg:gap-10'>
							{chain.map((item, index) => (
								<li key={item.step} className='relative flex flex-col gap-3 lg:pr-8'>
									{index < chain.length - 1 ? (
										<span aria-hidden='true' className='ed-mono absolute right-0 top-0 hidden text-[1.5rem] leading-none text-ed-accent-ink lg:block'>
											→
										</span>
									) : null}
									<span className='ed-mono text-[2rem] leading-none tracking-[-0.03em] text-ed-accent-ink'>{String(index + 1).padStart(2, "0")}</span>
									<span className='text-[1.25rem] font-medium leading-tight'>{item.step}</span>
									<p className='m-0 text-[0.9375rem] leading-relaxed text-ed-graphite'>{item.copy}</p>
								</li>
							))}
						</ol>
						<p className='m-0 mt-10 max-w-[52rem] border-t border-ed-ink/20 pt-8 text-[1.125rem] leading-relaxed text-ed-ink'>
							The chain runs through one record, kept below the harness. A model proxy keeps what the model said and can start none of it.{" "}
							<span className='font-medium text-ed-accent-ink'>We are the only ones who turn that record into a model you own.</span>
						</p>
					</div>
				</Part>
			</div>
		</Chapter>
	);
}

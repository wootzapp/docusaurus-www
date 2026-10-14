import React from "react";
import Section from "../editorial/section";
import Eyebrow from "../editorial/eyebrow";
import Accordion from "../editorial/accordion";

const items = [
	{
		question: "Isn't bring-your-own-harness already available elsewhere?",
		answer: (
			<p className='m-0'>
				Yes. WootzApp differs in <strong className='text-ed-ink'>where observation happens</strong>. Other platforms train within an existing harness and accept deterministic grading artifacts. WootzApp collects evidence independently of the harness and retains more of the browser state the grader needs.
			</p>
		),
	},
	{
		question: "Does W8 remove the need for LLM-as-a-judge?",
		answer: (
			<p className='m-0'>
				For some criteria. Criteria that reduce to stable, observable application state get explicit checks. Visual and semantic criteria keep model or human grading. The published benchmark measures <em>evidence preservation</em> and uses model-based verifiers.
			</p>
		),
	},
	{
		question: "Is this an agent security product?",
		answer: (
			<p className='m-0'>
				Security is one application. The product is execution-native ground truth for training and evaluation, and security-sensitive runtime attempts feed red-team tasks and training. Policy enforcement and runtime-event collection follow the configured OpenShell integration.
			</p>
		),
	},
	{
		question: "Do you resell enterprise data?",
		answer: (
			<p className='m-0'>
				Not by default. Enterprise-private training and licensed model-lab data are separate contracts and collection programs. External
				licensing requires explicit rights, authorized environments, and permitted use.
			</p>
		),
	},
];

export default function Faq() {
	return (
		<Section tone='surface'>
			<div className='grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] lg:gap-20'>
				<div className='flex flex-col gap-6'>
					<Eyebrow>FAQ</Eyebrow>
					<h2 className='ed-h2 m-0'>Harnesses, judges, security, and data.</h2>
				</div>
				<Accordion items={items} />
			</div>
		</Section>
	);
}

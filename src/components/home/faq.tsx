import React from "react";
import Section from "../editorial/section";
import Eyebrow from "../editorial/eyebrow";
import Accordion from "../editorial/accordion";

const items = [
	{
		question: "What does WootzApp sell?",
		answer: (
			<p className='m-0'>
				Datasets, evals, and RL environments for frontier model labs, and custom small models for enterprises. Both are built from traces
				captured by our hypervisor and the W8 browser.
			</p>
		),
	},
	{
		question: "How is this different from training on my production traffic?",
		answer: (
			<p className='m-0'>
				Production traffic is captured at the model proxy: prompts in, completions out, and the tool calls that pass through the model&apos;s
				context. The hypervisor also records the processes, network egress, policy decisions, and file changes behind each call, and W8
				records the full page at every step. The training set holds what the agent did and what the page held, alongside what the model
				said.
			</p>
		),
	},
	{
		question: "What is a work trace?",
		answer: (
			<p className='m-0'>
				A recording of an expert doing a real task inside our hypervisor and W8: actions, runtime events, and page state at every step. An
				agent trace is the same record produced by an AI agent.
			</p>
		),
	},
	{
		question: "Do we need to change our agent?",
		answer: (
			<p className='m-0'>
				No rewrite of core agent logic and no tracing SDK. Setup covers image packaging, sandbox configuration, credentials, and gateway
				routing.
			</p>
		),
	},
	{
		question: "Do you resell enterprise data?",
		answer: (
			<p className='m-0'>
				Not by default. Enterprise training and model-lab data are separate contracts. External licensing requires explicit rights and
				permitted use.
			</p>
		),
	},
];

export default function Faq() {
	return (
		<Section>
			<div className='grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] lg:gap-20'>
				<div className='flex flex-col gap-5'>
					<Eyebrow>FAQ</Eyebrow>
					<h2 className='ed-h2 m-0'>Questions.</h2>
				</div>
				<Accordion items={items} />
			</div>
		</Section>
	);
}

import React, {type ReactNode} from "react";
import Section, {type Tone} from "../editorial/section";
import Eyebrow from "../editorial/eyebrow";
import Accordion from "../editorial/accordion";

export type FaqItem = {question: string; answer: ReactNode};

// Answers shared with other pages, so each claim is written once.
export const changeAgentFaq: FaqItem = {
	question: "Do we need to change our agent?",
	answer: (
		<p className='m-0'>
			No rewrite of core agent logic and no tracing SDK. Setup covers image packaging, sandbox configuration, credentials, and gateway
			routing.
		</p>
	),
};

export const productionTrafficFaq: FaqItem = {
	question: "How is this different from training on my production traffic?",
	answer: (
		<p className='m-0'>
			Production traffic is captured at the model proxy: prompts in, completions out, and the tool calls that pass through the model&apos;s
			context. The hypervisor also records the processes, network egress, policy decisions, and file changes behind each call, and W8
			records the full page at every step. The training set holds what the agent did and what the page held, alongside what the model
			said.
		</p>
	),
};

export const resellFaq: FaqItem = {
	question: "Do you resell enterprise data?",
	answer: (
		<p className='m-0'>
			Not by default. Enterprise training and model-lab data are separate contracts. External licensing requires explicit rights and
			permitted use.
		</p>
	),
};

export const homeFaqItems: FaqItem[] = [
	{
		question: "What does WootzApp sell?",
		answer: (
			<p className='m-0'>
				Datasets, evals, and RL environments for frontier model labs, and custom small models for enterprises. Both are built from traces
				captured by our hypervisor and the W8 browser.
			</p>
		),
	},
	productionTrafficFaq,
	{
		question: "What is a work trace?",
		answer: (
			<p className='m-0'>
				A recording of an expert doing a real task inside our hypervisor and W8: actions, runtime events, and page state at every step. An
				agent trace is the same record produced by an AI agent.
			</p>
		),
	},
	changeAgentFaq,
	resellFaq,
];

export default function Faq({
	id,
	eyebrow = "FAQ",
	title = "Questions.",
	items = homeFaqItems,
	tone = "canvas",
}: {
	id?: string;
	eyebrow?: string;
	title?: string;
	items?: FaqItem[];
	tone?: Tone;
}) {
	return (
		<Section id={id} tone={tone}>
			<div className='grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] lg:gap-20'>
				<div className='flex flex-col gap-5'>
					<Eyebrow>{eyebrow}</Eyebrow>
					<h2 className='ed-h2 m-0'>{title}</h2>
				</div>
				<Accordion items={items} />
			</div>
		</Section>
	);
}

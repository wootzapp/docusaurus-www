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
			No. You keep your agent&apos;s logic and add no tracing SDK. Setup covers the image, the sandbox config, keys, and gateway
				routing.
		</p>
	),
};

export const productionTrafficFaq: FaqItem = {
	question: "How is this different from training on my live traffic?",
	answer: (
		<p className='m-0'>
			Live traffic is captured at the model proxy. That record holds prompts, completions, and the tool calls the model saw. The
				hypervisor adds the processes, network calls, each allow or deny, and the file changes behind each call. W8 adds the whole page at every
				step. So the training set holds what the agent did and what the page held, next to what the model said.
		</p>
	),
};

export const resellFaq: FaqItem = {
	question: "Do you resell enterprise data?",
	answer: (
		<p className='m-0'>
			No. Enterprise data and lab data sit under separate contracts. Any license to a third party needs explicit rights
				and a stated use.
		</p>
	),
};

export const homeFaqItems: FaqItem[] = [
	{
		question: "What does WootzApp sell?",
		answer: (
			<p className='m-0'>
				Two things. Datasets, evals, and RL environments for frontier model labs. Small models for enterprises. Both come from traces our
					hypervisor and W8 browser record.
			</p>
		),
	},
	productionTrafficFaq,
	{
		question: "What is a work trace?",
		answer: (
			<p className='m-0'>
				A recording of an expert doing a real task inside our hypervisor and W8. It holds each action, each runtime event, and the page at
					each step. An agent trace is the same record made by an AI agent.
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

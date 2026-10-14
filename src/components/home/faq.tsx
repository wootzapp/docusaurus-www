import React from "react";
import Section from "../editorial/section";
import Eyebrow from "../editorial/eyebrow";
import Accordion from "../editorial/accordion";

const items = [
	{
		question: "What does WootzApp sell?",
		answer: (
			<p className='m-0'>
				Two products built on two observation points. <strong className='text-ed-ink'>RL environments</strong> for frontier model labs,
				recorded inside our hypervisor and the W8 browser so rewards read runtime and page state directly.{" "}
				<strong className='text-ed-ink'>Custom small models</strong> for enterprises, trained on runs of your own agents that the hypervisor
				observed from below the harness and W8 verified in the browser.
			</p>
		),
	},
	{
		question: "Do we need to change our agent?",
		answer: (
			<p className='m-0'>
				No rewrite of core agent logic and no tracing SDK. Setup is image packaging, sandbox configuration, and gateway routing. From
				there the hypervisor observes the agent <strong className='text-ed-ink'>from below the harness</strong>, independently of what the
				agent logs, and W8 records the browser state its tasks depend on.
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

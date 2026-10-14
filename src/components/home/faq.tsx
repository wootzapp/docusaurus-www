import React from "react";
import Section from "../editorial/section";
import Eyebrow from "../editorial/eyebrow";
import Accordion from "../editorial/accordion";

const items = [
	{
		question: "What does WootzApp sell?",
		answer: (
			<p className='m-0'>
				Two products built from agent traces and work traces. <strong className='text-ed-ink'>Datasets, evals, and RL environments</strong>{" "}
				for frontier model labs, engineered by our team from traces recorded inside our hypervisor and the W8 browser. Our data passes the
				quality gates of the world&apos;s leading frontier model labs.{" "}
				<strong className='text-ed-ink'>Custom small models</strong> for enterprises, trained on traces of your own agents that the
				hypervisor recorded from below the harness and W8 verified in the browser.
			</p>
		),
	},
		{
		question: "What is a work trace?",
		answer: (
			<p className='m-0'>
				A recording of an authorized expert doing a real task inside our hypervisor and W8: their actions, the runtime events, the page
				state at every step, and the assessed outcome. An <strong className='text-ed-ink'>agent trace</strong> is the same record produced
				by an AI agent.
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

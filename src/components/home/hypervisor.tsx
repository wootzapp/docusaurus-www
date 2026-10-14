import React from "react";
import CtaLink from "../editorial/cta-link";
import Eyebrow from "../editorial/eyebrow";
import useAnchor from "../editorial/use-anchor";
import {links} from "@site/src/data/research";

const points = [
	{
		title: "Keep the harness.",
		copy: "Preserve prompts, tools, orchestration, and control flow; configure its sandbox, policies, and compatible model gateway.",
	},
	{
		title: "Observe outside its self-report.",
		copy: "Correlate available process/workspace and network-policy evidence with model and tool events.",
	},
	{
		title: "Capture security-relevant attempts.",
		copy: "Record denied egress and policy decisions alongside the tool calls the agent chose to log.",
	},
	{
		title: "Improve where requests originate.",
		copy: "The controlled inference path is the integration point for model selection, tracing, and operator-approved routing changes.",
	},
];

const evidenceClasses = [
	{name: "Model request", source: "Gateway route"},
	{name: "Proxy decision", source: "Binary-attributed endpoint policy"},
	{name: "Workspace update", source: "FUSE mount · /sandbox/work"},
	{name: "Egress attempt", source: "Sandbox policy · allow / deny"},
];

function BoundaryDiagram() {
	return (
		<figure className='m-0 flex flex-col gap-3'>
			<div className='grid grid-cols-1 gap-0 border border-ed-ink md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]'>
				<div className='flex flex-col gap-4 border-b border-ed-ink p-4 sm:p-5 md:border-b-0 md:border-r'>
					<p className='ed-eyebrow m-0 text-ed-smoke'>OpenShell sandbox</p>
					<div className='flex flex-col gap-3 border border-dashed border-ed-rule bg-ed-canvas p-4'>
						<p className='ed-eyebrow m-0 text-ed-ink'>Your existing harness</p>
						<p className='m-0 text-[0.9375rem] text-ed-graphite'>Prompts · tools · orchestration · control flow</p>
						<p className='ed-mono m-0 text-[0.75rem] text-ed-smoke'>unchanged agent logic</p>
					</div>
					<div className='flex flex-col gap-1.5'>
						<p className='ed-eyebrow m-0 text-ed-accent-ink'>Observation boundary</p>
						<p className='ed-mono m-0 text-[0.75rem] leading-relaxed text-ed-graphite'>
							supervisor · Landlock + seccomp · network namespace · local proxy
						</p>
					</div>
				</div>
				<div className='flex flex-col'>
					<p className='ed-eyebrow m-0 border-b border-ed-rule p-4 text-ed-smoke sm:px-5'>Evidence stream →</p>
					<ul className='m-0 flex list-none flex-col p-0'>
						{evidenceClasses.map((item) => (
							<li key={item.name} className='flex flex-col gap-0.5 border-b border-ed-rule px-4 py-3 last:border-b-0 sm:px-5'>
								<span className='text-[0.9375rem] font-medium'>{item.name}</span>
								<span className='ed-mono text-[0.75rem] text-ed-smoke'>{item.source}</span>
							</li>
						))}
					</ul>
				</div>
			</div>
			<figcaption className='ed-mono text-[0.75rem] leading-relaxed text-ed-smoke'>
				Captured events follow the sandbox configuration and its instrumentation. Built on NVIDIA OpenShell;
				no NVIDIA endorsement implied.
			</figcaption>
		</figure>
	);
}

export default function Hypervisor() {
	useAnchor("hypervisor");
	return (
		<div id='hypervisor' className='grid grid-cols-1 scroll-mt-20 gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-20'>
			<div className='flex flex-col gap-6'>
				<Eyebrow className='text-ed-accent-ink'>01 / The Agent Hypervisor</Eyebrow>
				<h3 className='ed-h3 m-0 max-w-[30rem]'>The harness reports what it knows. The runtime reveals what it does.</h3>
				<p className='ed-body m-0 max-w-[36rem] text-ed-graphite'>
					An agent can call tools, spawn processes, read files, attempt connections, trigger policy denials, and recover from failures
					without those events being faithfully reflected in its model transcript.
				</p>
				<p className='ed-body m-0 max-w-[36rem] text-ed-graphite'>
					WootzApp&apos;s execution layer builds on <strong className='text-ed-ink'>NVIDIA OpenShell</strong> and the{" "}
					<a href={links.openrindBranch} target='_blank' rel='noopener noreferrer' className='ed-link'>
						Openrind Shell runtime
					</a>
					. It keeps existing agent logic intact and brings model interactions, configured runtime evidence, and sandbox-policy events into one view.
				</p>
				<ul className='m-0 flex list-none flex-col p-0'>
					{points.map((point) => (
						<li key={point.title} className='border-t border-ed-rule py-4 text-[0.9375rem] leading-relaxed text-ed-graphite'>
							<strong className='font-semibold text-ed-ink'>{point.title}</strong> {point.copy}
						</li>
					))}
				</ul>
				<p className='m-0 text-[1.0625rem] font-semibold'>Keep your agent&apos;s framework. Move the observation boundary.</p>
				<CtaLink href={links.openrindArchitecture} variant='text' className='w-fit'>
					Explore the OpenShell-based architecture
				</CtaLink>
			</div>
			<div className='lg:pt-12'>
				<BoundaryDiagram />
			</div>
		</div>
	);
}

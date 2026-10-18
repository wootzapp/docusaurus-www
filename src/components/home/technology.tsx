import React, {type ReactNode} from "react";
import Section from "../editorial/section";
import Eyebrow from "../editorial/eyebrow";
import CtaLink from "../editorial/cta-link";
import Specimen from "../editorial/specimen";
import useAnchor from "../editorial/use-anchor";
import LayerTag, {type Layer} from "./layer-tag";
import {links, taskTwo} from "@site/src/data/research";

const events = ["Model request", "Proxy decision", "Workspace update", "Egress attempt"];

function BoundaryVisual() {
	return (
		<div className='grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-3'>
			<div className='flex flex-col gap-2 rounded-xl border border-ed-ink p-3'>
				<span className='ed-eyebrow text-[0.75rem] text-ed-smoke'>OpenShell sandbox</span>
				<div className='rounded-lg border border-dashed border-ed-rule bg-ed-canvas px-3 py-4 text-center'>
					<span className='text-[0.875rem] font-medium'>Your harness</span>
					<span className='ed-mono block text-[0.75rem] text-ed-smoke'>unchanged</span>
				</div>
			</div>
			<ul className='m-0 flex list-none flex-col gap-1.5 p-0'>
				{events.map((event) => (
					<li key={event} className='flex items-center gap-2 rounded-lg bg-ed-canvas px-3 py-2 text-[0.8125rem] font-medium'>
						<span aria-hidden='true' className='size-1.5 shrink-0 rounded-full bg-ed-accent' />
						{event}
					</li>
				))}
			</ul>
		</div>
	);
}

function PageVisual() {
	return (
		<div className='grid grid-cols-2 gap-3'>
			<Specimen title='Screenshot' label='Frame' kind='recorded'>
				<div className='flex flex-col gap-1.5'>
					<div className='rounded border border-ed-rule bg-ed-canvas py-3 text-center text-[0.75rem] text-ed-smoke'>Gallery</div>
					<div className='border-t-2 border-dashed border-ed-accent pt-1 text-[0.75rem] text-ed-accent-ink'>viewport ends</div>
				</div>
			</Specimen>
			<Specimen title='W8 record' label='Page' kind='recorded'>
				<ul className='m-0 flex list-none flex-col gap-1 p-0'>
					{taskTwo.dom.map((line) => (
						<li key={line} className='ed-mark w-fit text-[0.75rem] text-ed-ink'>
							{line}
						</li>
					))}
				</ul>
			</Specimen>
		</div>
	);
}

const cards: {id: string; layer: Layer; title: string; copy: string; visual: ReactNode; href: string; link: string}[] = [
	{
		id: "hypervisor",
		layer: "hypervisor",
		title: "Below the harness",
		copy: "An OpenShell-based sandbox records processes, egress, policy decisions, and file changes, whatever the agent logs.",
		visual: <BoundaryVisual />,
		href: links.openrindArchitecture,
		link: "Architecture",
	},
	{
		id: "browser",
		layer: "browser",
		title: "Inside the browser",
		copy: "Our Chromium browser records the page state screenshots miss: exact values, controls, and off-screen content.",
		visual: <PageVisual />,
		href: "/research",
		link: "See the benchmark",
	},
];

export default function Technology() {
	useAnchor("hypervisor");
	useAnchor("browser");
	return (
		<Section id='technology' tone='surface'>
			<div className='flex flex-col gap-5'>
				<Eyebrow>The technology</Eyebrow>
				<h2 className='ed-h2 m-0'>Two observation points we built.</h2>
			</div>
			<div className='mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6'>
				{cards.map((card) => (
					<article key={card.id} id={card.id} className='ed-card flex scroll-mt-24 flex-col gap-6 bg-ed-canvas p-6 sm:p-8'>
						<div className='rounded-2xl bg-ed-surface p-4'>{card.visual}</div>
						<div className='flex flex-col gap-3'>
							<LayerTag layer={card.layer} />
							<h3 className='ed-h3 m-0'>{card.title}</h3>
							<p className='ed-body m-0 text-ed-graphite'>{card.copy}</p>
						</div>
						<CtaLink href={card.href} variant='text' className='mt-auto w-fit'>
							{card.link}
						</CtaLink>
					</article>
				))}
			</div>
			<p className='ed-mono m-0 mt-6 text-[0.75rem] text-ed-smoke'>Built on NVIDIA OpenShell; no NVIDIA endorsement implied.</p>
		</Section>
	);
}

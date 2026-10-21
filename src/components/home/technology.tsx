import React, {type ReactNode} from "react";
import clsx from "clsx";
import Section from "../editorial/section";
import Eyebrow from "../editorial/eyebrow";
import CtaLink from "../editorial/cta-link";
import TaskNineteenPair from "../work/task-nineteen-pair";
import useAnchor from "../editorial/use-anchor";
import LayerTag, {type Layer} from "./layer-tag";
import {links} from "@site/src/data/research";

const events = ["Model request", "Proxy decision", "Workspace update", "Egress attempt"];

function BoundaryVisual() {
	return (
		<div className='grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-4'>
			<div className='flex flex-col gap-3 rounded-2xl border border-ed-ink bg-ed-surface p-4'>
				<span className='ed-eyebrow text-[0.75rem] text-ed-smoke'>OpenShell sandbox</span>
				<div className='flex flex-1 flex-col items-center justify-center rounded-xl border border-dashed border-ed-rule bg-ed-canvas px-3 py-6 text-center'>
					<span className='text-[1rem] font-semibold'>Your harness</span>
					<span className='ed-mono text-[0.75rem] text-ed-smoke'>unchanged</span>
				</div>
			</div>
			<ul className='m-0 flex list-none flex-col justify-center gap-2 p-0'>
				{events.map((event) => (
					<li key={event} className='flex items-center gap-2.5 rounded-xl bg-ed-surface px-3.5 py-2.5 text-[0.875rem] font-medium shadow-sm'>
						<span aria-hidden='true' className='size-2 shrink-0 rounded-full bg-ed-accent' />
						{event}
					</li>
				))}
			</ul>
		</div>
	);
}

function PageVisual() {
	return <TaskNineteenPair compact />;
}

const rows: {id: string; layer: Layer; title: string; copy: string; contrast: string; visual: ReactNode; href: string; link: string}[] = [
	{
		id: "hypervisor",
		layer: "hypervisor",
		title: "Below the harness",
		copy: "An OpenShell-based sandbox records processes, egress, policy decisions, and file changes, whatever the agent logs.",
		contrast: "A proxy sees the model call. The hypervisor sees what the call set in motion.",
		visual: <BoundaryVisual />,
		href: links.openrindArchitecture,
		link: "Architecture",
	},
	{
		id: "browser",
		layer: "browser",
		title: "Inside the browser",
		copy: "Our Chromium browser records the page state screenshots miss: exact values, controls, and off-screen content.",
		contrast: "A proxy sees the screenshot the agent sent to the model. W8 sees the whole page.",
		visual: <PageVisual />,
		href: "/research/w8-domdiff-bench",
		link: "See the benchmark",
	},
];

// Zigzag rows: the visual and the copy swap sides.
export default function Technology() {
	useAnchor("hypervisor");
	useAnchor("browser");
	return (
		<Section id='technology' tone='surface'>
			<div className='flex flex-col gap-5'>
				<Eyebrow>The technology</Eyebrow>
				<h2 className='ed-h2 m-0'>Two observation points a model proxy doesn&apos;t have.</h2>
			</div>
			<div className='mt-14 flex flex-col gap-16 lg:gap-24'>
				{rows.map((row, index) => (
					<article
						key={row.id}
						id={row.id}
						className='grid scroll-mt-24 grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16'
					>
						<div className={clsx("rounded-3xl bg-ed-canvas p-5 sm:p-8", index % 2 === 1 && "lg:order-2")}>{row.visual}</div>
						<div className='flex flex-col gap-4'>
							<span className='ed-mono text-[0.8125rem] text-ed-smoke'>0{index + 1}</span>
							<LayerTag layer={row.layer} />
							<h3 className='ed-h2 m-0'>{row.title}</h3>
							<p className='ed-lede m-0 max-w-[30rem] text-ed-graphite'>{row.copy}</p>
							<p className='m-0 max-w-[30rem] border-l-2 border-ed-accent pl-4 text-[0.9375rem] leading-relaxed text-ed-ink'>{row.contrast}</p>
							<CtaLink href={row.href} variant='text' className='w-fit'>
								{row.link}
							</CtaLink>
						</div>
					</article>
				))}
			</div>
			<p className='ed-mono m-0 mt-14 text-[0.75rem] text-ed-smoke'>Built on NVIDIA OpenShell; no NVIDIA endorsement implied.</p>
		</Section>
	);
}

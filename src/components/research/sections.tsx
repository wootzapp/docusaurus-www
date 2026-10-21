import React from "react";
import Section from "../editorial/section";
import Eyebrow from "../editorial/eyebrow";
import CtaLink from "../editorial/cta-link";
import EvidenceBars from "../editorial/evidence-bars";
import PaperHeader from "../work/paper-header";
import Citation from "../work/citation";
import {citation, gapCategories, links, report, storageSample, study, taskDataUrl, taskExamples} from "@site/src/data/research";
import TaskNineteenPair from "../work/task-nineteen-pair";

const methodSteps = [
	{title: "Record once.", copy: "Each task produces a trajectory of actions and ordered browser states."},
	{title: "Preserve both views.", copy: "Capture screenshots and DOM-diff Optimized from the same execution."},
	{
		title: "Freeze the rubric.",
		copy: "Both verifier pathways receive the same task, action history, final answer and frozen rubric.",
	},
	{
		title: "Audit the sources.",
		copy: "Review whether each criterion's required information actually exists in each representation.",
	},
	{
		title: "Count asymmetric omissions.",
		copy: "A criterion counts against a representation only when required evidence is missing there and present in the other.",
	},
];

const nextStudies = [
	{
		title: "Runtime evidence coverage",
		copy: "Run the same unchanged harness in SDK-only and OpenShell-based conditions. Measure which model, process, tool, egress and policy events are visible under a published attack/failure corpus; report false positives, event loss, and integration work.",
		status: "Protocol in preparation.",
	},
	{
		title: "Browser-state checks vs model judges",
		copy: "Create a human-reviewed, task-specific held-out set with exact browser outcomes. Compare DOM-based deterministic checks, screenshot judges and DOM-assisted judges on agreement, false positives, false negatives, inference cost and latency.",
		status: `Next benchmark. Separate from the ${study.reduction} evidence study.`,
	},
	{
		title: "Optimization impact",
		copy: "Run matched model/routing/training experiments with and without W8-derived evidence. Score actual task success, regression rate, and cost per verified completion.",
		status: "Future controlled study.",
	},
];

const sources = [
	{label: "Technical report and metric definitions", href: links.benchReport},
	{label: "Published results and summary.json", href: links.benchResults},
	{label: "Verifier, scripts, and comparison instructions", href: links.benchVerifier},
	{label: "Browser Agent Tasks dataset (Hugging Face)", href: links.dataset},
	{label: "Openrind Shell OpenShell runtime source", href: links.openrindBranch},
];

function ResearchHero() {
	return (
		<PaperHeader
			kind={report.type}
			date={study.published}
			title={study.name}
			subtitle={report.title}
			byline={report.byline}
			abstract={
				<>
					<p className='m-0'>
						Agent evaluation usually starts after the trajectory has been captured. We ask the earlier question:{" "}
						<strong className='text-ed-ink'>what did the recording fail to preserve?</strong>
					</p>
					<p className='m-0'>
						We ran the same {study.tasks} browser-agent tasks once and kept two records of each run: screenshots, and structured page state
						from W8, our Chromium-based browser. Across {study.criteria} audited rubric criteria, screenshots lacked the required evidence on{" "}
						{study.screenshotRate} of criteria and W8 on {study.domRate}, {study.reduction} fewer gaps.
					</p>
				</>
			}
			stats={[
				{value: String(study.tasks), label: "Paired browser tasks"},
				{value: String(study.criteria), label: "Audited rubric criteria"},
				{value: `${study.screenshotGaps} (${study.screenshotRate})`, label: "Screenshot-side missing evidence"},
				{value: `${study.domGaps} (${study.domRate})`, label: "W8-side missing evidence"},
			]}
			sources={[
				{label: "Technical report", href: links.benchReport},
				{label: "Results", href: links.benchResults},
				{label: "Verifier", href: links.benchVerifier},
				{label: "Task set", href: links.dataset},
			]}
		/>
	);
}

function EvidenceFidelity() {
	return (
		<Section id='evidence-fidelity' tone='surface'>
			<div className='grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-20'>
				<div className='flex flex-col gap-6'>
					<Eyebrow className='text-ed-accent-ink'>Track 01 / Evidence fidelity</Eyebrow>
					<h2 className='ed-h2 m-0'>{study.reduction} fewer evidence gaps than screenshot recordings.</h2>
					<p className='ed-body m-0 text-ed-graphite'>
						When a required value falls outside the captured viewport, when an endpoint is hidden in a structured field, or when an important
						control isn&apos;t legible, a screenshot-based verifier can only reason from incomplete evidence.
					</p>
					<p className='ed-body m-0 text-ed-graphite'>
						Our DOM-diff Optimized representation preserved the required source evidence more often in the audited paired comparison.
					</p>
				</div>
				<div className='flex flex-col gap-8'>
					<p className='m-0 font-medium'>Exhibit 1 — Criteria with asymmetric missing source evidence. Lower is better.</p>
					<table className='ed-table'>
						<thead>
							<tr>
								<th>Representation</th>
								<th className='ed-num'>Missing-evidence criteria</th>
								<th className='ed-num'>Rate</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Screenshot recording</td>
								<td className='ed-num'>
									{study.screenshotGaps} of {study.criteria}
								</td>
								<td className='ed-num font-medium'>{study.screenshotRate}</td>
							</tr>
							<tr>
								<td>W8 DOM-diff Optimized</td>
								<td className='ed-num'>
									{study.domGaps} of {study.criteria}
								</td>
								<td className='ed-num font-medium text-ed-accent-ink'>{study.domRate}</td>
							</tr>
						</tbody>
					</table>
					<EvidenceBars
						max={5}
						ticks={[0, 1, 2, 3, 4, 5]}
						unit='%'
						rows={[
							{
								label: "Screenshot recording",
								value: study.screenshotRateValue,
								display: study.screenshotRate,
								detail: `${study.screenshotGaps}/${study.criteria}`,
							},
							{
								label: "W8 DOM-diff Optimized",
								value: study.domRateValue,
								display: study.domRate,
								detail: `${study.domGaps}/${study.criteria}`,
								accent: true,
							},
						]}
						caption={`Shared 0–5% axis. Published ${study.published}.`}
					/>
					<details className='ed-accordion'>
						<summary>Relative reduction</summary>
						<p className='ed-mono m-0 pb-6 text-[0.9375rem] text-ed-graphite'>
							({study.screenshotGaps} − {study.domGaps}) / {study.screenshotGaps} = {study.reduction}
						</p>
					</details>
				</div>
			</div>
		</Section>
	);
}

function GapCategories() {
	const totals = gapCategories.reduce(
		(acc, row) => ({screenshot: acc.screenshot + row.screenshot, dom: acc.dom + row.dom}),
		{screenshot: 0, dom: 0}
	);
	return (
		<Section>
			<div className='grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-20'>
				<div className='flex flex-col gap-6'>
					<Eyebrow>Where evidence disappeared</Eyebrow>
					<h2 className='ed-h3 m-0'>Each confirmed gap is assigned one primary category, so counts sum without double counting.</h2>
					<p className='m-0 font-medium'>Exhibit 2 — Source-evidence gaps by category.</p>
				</div>
				<table className='ed-table'>
					<thead>
						<tr>
							<th>Source-evidence gap category</th>
							<th className='ed-num'>Screenshot</th>
							<th className='ed-num'>W8 DOM</th>
						</tr>
					</thead>
					<tbody>
						{gapCategories.map((row) => (
							<tr key={row.label}>
								<td>{row.label}</td>
								<td className='ed-num'>{row.screenshot}</td>
								<td className='ed-num'>{row.dom}</td>
							</tr>
						))}
						<tr>
							<td className='font-medium'>Total</td>
							<td className='ed-num font-medium'>{totals.screenshot}</td>
							<td className='ed-num font-medium'>{totals.dom}</td>
						</tr>
					</tbody>
				</table>
			</div>

			<div className='mt-20 flex flex-col gap-6'>
				<Eyebrow>Preserved details · Table 4 of the report</Eyebrow>
				<TaskNineteenPair />
				<ol className='m-0 grid grid-cols-1 list-none gap-0 border-t border-ed-ink p-0 md:grid-cols-3'>
					{taskExamples.map((task) => (
						<li key={task.id} className='flex flex-col gap-3 border-b border-ed-rule py-6 md:px-6 md:first:pl-0 md:last:pr-0'>
							<p className='ed-mono m-0 text-[0.8125rem] text-ed-accent-ink'>
								Task {task.id} / {task.title}
							</p>
							<p className='m-0 text-[0.9375rem] leading-relaxed text-ed-graphite'>{task.copy}</p>
							<span className='flex flex-wrap gap-x-4 gap-y-1 text-[0.875rem]'>
								<a href={taskDataUrl(task.id, "ss")} target='_blank' rel='noopener noreferrer' className='ed-link'>
									Screenshot run ↗
								</a>
								<a href={taskDataUrl(task.id, "dom")} target='_blank' rel='noopener noreferrer' className='ed-link'>
									W8 run ↗
								</a>
							</span>
						</li>
					))}
				</ol>
				<CtaLink href={links.benchExamples} variant='text' className='w-fit'>
					Table 4 in the technical report
				</CtaLink>
			</div>
		</Section>
	);
}

function Method() {
	return (
		<Section id='method' tone='surface'>
			<div className='grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-20'>
				<div className='flex flex-col gap-6'>
					<Eyebrow className='text-ed-accent-ink'>Track 01 / Method</Eyebrow>
					<h2 className='ed-h2 m-0'>Same run. Same rubric. Different evidence.</h2>
					<CtaLink href={links.benchMetric} variant='text' className='w-fit'>
						Read the exact metric definition
					</CtaLink>
				</div>
				<div className='flex flex-col gap-10'>
					<ol className='m-0 flex list-none flex-col border-t border-ed-ink p-0'>
						{methodSteps.map((step, index) => (
							<li key={step.title} className='grid grid-cols-[2.5rem_minmax(0,1fr)] gap-2 border-b border-ed-rule py-5'>
								<span className='ed-mono text-[0.8125rem] text-ed-accent-ink'>0{index + 1}</span>
								<p className='m-0 text-[0.9375rem] leading-relaxed text-ed-graphite'>
									<strong className='font-medium text-ed-ink'>{step.title}</strong> {step.copy}
								</p>
							</li>
						))}
					</ol>
					<div className='flex flex-col gap-3 border border-ed-ink p-6'>
						<p className='ed-eyebrow m-0 text-ed-ink'>Scope of the metric</p>
						<p className='m-0 text-[0.9375rem] leading-relaxed text-ed-graphite'>
							The metric covers asymmetric evidence loss. Evidence missing from both representations, agent success, human agreement with judge scores, downstream learning gains, and performance on visual tasks are separate measurements.
						</p>
						<p className='m-0 text-[0.9375rem] leading-relaxed text-ed-graphite'>
							The audit and scoring pipeline use model-based components and manual source review.{" "} <strong className='text-ed-ink'>The study measures evidence preservation.</strong> Deterministic checks versus LLM graders is the next benchmark.
						</p>
					</div>
				</div>
			</div>
		</Section>
	);
}

function StorageMeasurement() {
	return (
		<Section>
			<div className='grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-20'>
				<div className='flex flex-col gap-6'>
					<Eyebrow>Engineering measurement / Separate sample</Eyebrow>
					<h2 className='ed-h3 m-0'>Smaller representation, richer context.</h2>
					<p className='m-0 text-[clamp(2.5rem,5vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.01em]'>{storageSample.rows[0].display}</p>
					<p className='ed-body m-0 text-ed-graphite'>
						Average compact browser-state record. In a <strong className='text-ed-ink'>separate historical sample of {storageSample.states} recorded states</strong>,
						DOM-diff Optimized averaged {storageSample.rows[0].display} of stored text per state, versus {storageSample.rows[1].display} for
						detailed readable DOM text and {storageSample.rows[2].display} for structured snapshots.
					</p>
					<p className='m-0 border-l-2 border-ed-accent pl-4 text-[0.9375rem] leading-relaxed text-ed-graphite'>
						This compares stored size per state. Inference-token usage, verifier cost, and training time are separate measurements. The sample is separate from the {study.tasks}-task evidence-loss study.
					</p>
				</div>
				<EvidenceBars
					className='lg:pt-12'
					max={200}
					ticks={[0, 50, 100, 150, 200]}
					rows={storageSample.rows.map((row, index) => ({...row, accent: index === 0}))}
					caption={`Exhibit 3 — Mean stored size per state, KiB. Historical ${storageSample.states}-state sample.`}
				/>
			</div>
		</Section>
	);
}

function PostTraining() {
	const rail = ["Evidence capture", "Criterion checks", "Trusted rewards", "Evaluations and training"];
	return (
		<Section tone='surface'>
			<div className='flex flex-col gap-6'>
				<Eyebrow>Post-training</Eyebrow>
				<h2 className='ed-h2 m-0'>A better reward starts with a better record.</h2>
				<div className='ed-lede flex max-w-[48rem] flex-col gap-4 text-ed-graphite'>
					<p className='m-0'>
						A model judge cannot recover an exact value that was never saved. A deterministic checker also needs the relevant state to have
						been captured in the first place.
					</p>
					<p className='m-0'>
						W8&apos;s work establishes a measurable reduction in missing browser source evidence. The next engineering step is to turn that
						evidence into <strong className='text-ed-ink'>task-specific checks</strong> for observable state and outcome changes, while
						retaining screenshot and human/model judgment when visual or subjective criteria demand it.
					</p>
				</div>
			</div>
			<ol className='m-0 mt-12 grid grid-cols-1 list-none border border-ed-rule p-0 sm:grid-cols-2 lg:grid-cols-4'>
				{rail.map((step, index) => (
					<li
						key={step}
						className='flex flex-col gap-2 border-b border-ed-rule p-5 last:border-b-0 sm:[&:nth-child(odd)]:border-r lg:border-b-0 lg:border-r lg:last:border-r-0'
					>
						<span className='ed-eyebrow text-[0.75rem] text-ed-smoke'>{index === 0 ? "Measured" : "Next engineering step"}</span>
						<span className={index === 0 ? "font-medium" : "font-medium text-ed-smoke"}>{step}</span>
					</li>
				))}
			</ol>
		</Section>
	);
}

export function NextMeasurements() {
	return (
		<Section>
			<div className='flex flex-col gap-6'>
				<Eyebrow>The measurements we&apos;re building next</Eyebrow>
				<h2 className='ed-h2 m-0 max-w-[48rem]'>Separate questions deserve separate benchmarks.</h2>
			</div>
			<div className='mt-14 grid grid-cols-1 gap-0 border-t border-ed-ink lg:grid-cols-3'>
				{nextStudies.map((item) => (
					<article key={item.title} className='flex flex-col gap-4 border-b border-ed-rule py-7 lg:border-b-0 lg:border-r lg:px-7 lg:first:pl-0 lg:last:border-r-0'>
						<h3 className='ed-h3 m-0'>{item.title}</h3>
						<p className='m-0 text-[0.9375rem] leading-relaxed text-ed-graphite'>{item.copy}</p>
						<p className='ed-mono m-0 mt-auto text-[0.8125rem] text-ed-accent-ink'>Status: {item.status}</p>
					</article>
				))}
			</div>
		</Section>
	);
}

function Reproduce() {
	return (
		<Section tone='surface'>
			<div className='grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20'>
				<div className='flex flex-col gap-6'>
					<Eyebrow>Sources</Eyebrow>
					<h2 className='ed-h3 m-0'>Inspect the evidence. Reproduce the result.</h2>
					<ul className='m-0 flex list-none flex-col border-t border-ed-ink p-0'>
						{sources.map((source) => (
							<li key={source.href} className='border-b border-ed-rule'>
								<a
									href={source.href}
									target='_blank'
									rel='noopener noreferrer'
									className='flex items-center justify-between gap-4 py-4 text-[0.9375rem] font-medium text-ed-ink hover:text-ed-accent-ink'
								>
									<span>{source.label}</span>
									<span aria-hidden='true'>↗</span>
								</a>
							</li>
						))}
					</ul>
				</div>
				<div className='flex flex-col gap-6'>
					<h2 className='ed-h2 m-0'>Put your hardest agent on the record.</h2>
					<p className='ed-lede m-0 text-ed-graphite'>
						Bring a workflow where existing traces or screenshots fail to explain what happened. We&apos;ll compare the evidence the harness
						emits with what the execution environment and browser can preserve.
					</p>
					<CtaLink href={links.booking} className='w-fit'>
						Discuss a benchmark run
					</CtaLink>
				</div>
			</div>
		</Section>
	);
}

export default function ResearchPageContent() {
	return (
		<main className='ed-page'>
			<ResearchHero />
			<EvidenceFidelity />
			<GapCategories />
			<Method />
			<StorageMeasurement />
			<PostTraining />
			<Reproduce />
			<Citation bibtex={citation} />
		</main>
	);
}

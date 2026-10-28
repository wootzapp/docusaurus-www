import React from "react";
import Link from "@docusaurus/Link";
import Chapter from "./chapter";
import LayerTag, {type Layer} from "../home/layer-tag";

const rows: {title: string; work: string; layer: Layer; record: string; link?: {label: string; to: string}}[] = [
	{
		title: "Back-office operations",
		work: "Claims, invoices, and reconciliations in browser-based systems.",
		layer: "browser",
		record: "The exact value on every screen, including off-screen content.",
	},
	{
		title: "IT operations",
		work: "Tickets, scripts, and configuration changes.",
		layer: "hypervisor",
		record: "Every process, file change, and egress attempt.",
	},
	{
		title: "Software delivery",
		work: "Coding agents in your repositories.",
		layer: "hypervisor",
		record: "Compiler and test results as the grader.",
		link: {label: "See the preprint →", to: "/research/let-execution-do-the-teaching"},
	},
	{
		title: "Research and compliance desks",
		work: "Experts gathering evidence across internal and public sites.",
		layer: "browser",
		record: "The pages visited and the values read, as the eval and the training set.",
	},
];

export default function Workflows() {
	return (
		<Chapter
			id='workflows'
			title='Workflows where the record already exists.'
			kicker='Illustrative'
			lede='Any task your agents or experts run inside a sandbox or a browser is a candidate.'
		>
			<div className='hidden md:block'>
				<table className='ed-table [&_td]:py-5 [&_td]:pr-6 [&_th]:pr-6'>
					<thead>
						<tr>
							<th scope='col'>Workflow</th>
							<th scope='col'>Example work</th>
							<th scope='col'>Recorder</th>
							<th scope='col'>What the record holds</th>
						</tr>
					</thead>
					<tbody>
						{rows.map((row) => (
							<tr key={row.title}>
								<td className='whitespace-nowrap font-medium text-ed-ink'>{row.title}</td>
								<td className='text-ed-graphite'>{row.work}</td>
								<td>
									<LayerTag layer={row.layer} />
								</td>
								<td className='text-ed-graphite'>
									{row.record}
									{row.link ? (
										<>
											{" "}
											<Link to={row.link.to} className='ed-link whitespace-nowrap'>
												{row.link.label}
											</Link>
										</>
									) : null}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<ul className='m-0 list-none border-t border-ed-ink p-0 md:hidden'>
				{rows.map((row) => (
					<li key={row.title} className='flex flex-col gap-3 border-b border-ed-rule py-6'>
						<div className='flex flex-wrap items-center justify-between gap-3'>
							<h3 className='m-0 text-[1.125rem] font-medium leading-snug'>{row.title}</h3>
							<LayerTag layer={row.layer} />
						</div>
						<dl className='m-0 grid grid-cols-[6.5rem_minmax(0,1fr)] gap-x-4 gap-y-2'>
							<dt className='ed-eyebrow pt-0.5 text-ed-smoke'>Example work</dt>
							<dd className='m-0 text-[0.9375rem] leading-relaxed text-ed-graphite'>{row.work}</dd>
							<dt className='ed-eyebrow pt-0.5 text-ed-smoke'>The record</dt>
							<dd className='m-0 text-[0.9375rem] leading-relaxed text-ed-graphite'>
								{row.record}
								{row.link ? (
									<>
										{" "}
										<Link to={row.link.to} className='ed-link whitespace-nowrap'>
											{row.link.label}
										</Link>
									</>
								) : null}
							</dd>
						</dl>
					</li>
				))}
			</ul>
			<p className='ed-mono m-0 mt-5 text-[0.75rem] text-ed-smoke'>Illustrative workflow families. Each engagement starts with the workflow your team picks.</p>
		</Chapter>
	);
}

import React from "react";
import clsx from "clsx";
import {LuCheck, LuX} from "react-icons/lu";
import Section from "../editorial/section";
import Eyebrow from "../editorial/eyebrow";
import CtaLink from "../editorial/cta-link";
import LayerTag from "./layer-tag";
import {evidenceGroups} from "@site/src/data/research";

const total = evidenceGroups.reduce((n, group) => n + group.rows.length, 0);
const viaProxy = evidenceGroups.reduce((n, group) => n + group.rows.filter((row) => row.proxy).length, 0);
const words = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve"];

function Mark({captured, ours}: {captured: boolean; ours?: boolean}) {
	if (captured) {
		return <LuCheck aria-label='Captured' className={clsx("mx-auto text-xl", ours ? "text-ed-accent" : "text-ed-ink")} />;
	}
	return <LuX aria-label='Only if your harness reports it' className='mx-auto text-xl text-ed-smoke' />;
}

// Coverage matrix: what a model proxy's training set holds against what ours holds.
export default function CaptureStack() {
	return (
		<Section id='capture' className='ed-grid-bg'>
			<div className='grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.25fr)] lg:items-start lg:gap-20'>
				<div className='flex flex-col gap-6'>
					<Eyebrow>Where the data comes from</Eyebrow>
					<h2 className='ed-h2 m-0'>Others trace the model proxy. We trace the agent.</h2>
					<p className='ed-lede m-0 text-ed-graphite'>
						Other training platforms record at the model proxy. They keep what the model was asked and what it answered. Our hypervisor
						and W8 browser record what the agent did and what the page held. A proxy trace holds {words[viaProxy]} of the {words[total]}{" "}
						kinds of evidence below. Ours holds all {words[total]}.
					</p>
					<p className='m-0 text-[1rem] leading-relaxed text-ed-graphite'>
						We built both recorders.{" "}
						<CtaLink href='#technology' variant='text'>
							How they work
						</CtaLink>
					</p>
				</div>

				<div className='ed-card overflow-hidden'>
					<table className='ed-matrix'>
						<colgroup>
							<col />
							<col className='w-[6rem] lg:w-[6.5rem]' />
							<col className='w-[6.5rem] bg-ed-ink lg:w-[8rem]' />
						</colgroup>
						<thead>
							<tr>
								<th scope='col' className='ed-eyebrow px-5 py-4 text-left text-ed-smoke'>
									What the traces hold
								</th>
								<th scope='col' className='px-2 py-4 text-center text-ed-smoke'>
									<span className='ed-eyebrow block'>Others</span>
									<span className='ed-mono block text-[0.75rem] normal-case'>model proxy</span>
								</th>
								<th scope='col' className='ed-eyebrow px-2 py-4 text-center text-ed-accent'>
									WootzApp
								</th>
							</tr>
						</thead>
						<tbody>
							{evidenceGroups.map((group) => (
								<React.Fragment key={group.label}>
									<tr>
										<th scope='rowgroup' colSpan={2} className='border-t border-ed-rule bg-ed-canvas px-5 pb-2 pt-3 text-left text-[0.8125rem] font-medium text-ed-ink'>
											{group.label}
										</th>
										<td className='border-t border-ed-canvas/20 px-2 pb-2 pt-3 text-center'>
											{group.layer ? (
												<>
													<LayerTag layer={group.layer} tone='dark' className='hidden lg:inline-flex' />
													<span className='ed-mono text-[0.75rem] text-ed-canvas/70 lg:hidden'>
														{group.layer === "hypervisor" ? "hypervisor" : "W8 browser"}
													</span>
												</>
											) : (
												<span className='ed-mono text-[0.75rem] text-ed-canvas/70'>{group.via}</span>
											)}
										</td>
									</tr>
									{group.rows.map((row) => (
										<tr key={row.label}>
											<td className='border-t border-ed-rule/70 px-5 py-2.5 text-[0.9375rem] text-ed-ink'>{row.label}</td>
											<td className='border-t border-ed-rule/70 px-2 py-2.5 text-center'>
												<Mark captured={row.proxy} />
											</td>
											<td className='border-t border-ed-canvas/20 px-2 py-2.5 text-center'>
												<Mark captured ours />
											</td>
										</tr>
									))}
								</React.Fragment>
							))}
						</tbody>
						<tfoot>
							<tr>
								<td colSpan={2} className='border-t border-ed-rule px-5 py-3 text-[0.8125rem] leading-relaxed text-ed-smoke'>
									<LuX aria-hidden='true' className='-mt-0.5 mr-1 inline' />
									reaches a proxy trace only if your harness reports it.
								</td>
								<td className='border-t border-ed-canvas/20' />
							</tr>
						</tfoot>
					</table>
				</div>
			</div>
		</Section>
	);
}

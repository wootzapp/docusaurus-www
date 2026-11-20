import React, {Fragment} from "react";
import clsx from "clsx";
import Spec from "./spec";
import {problemCopy as copy} from "./problem.copy";
import s from "./problem.module.css";

// § 01. The problem statement as one drawing: four artifacts on one path (production run, session record, sealed
// dataset, checkpoint), the requirements as numbered accent ticks across the arrows between them, and a dashed curl
// out of the checkpoint for the next cycle, which carries the last tick. The grid beneath keys each number to its
// requirement and mechanism. The path runs left to right from 1280px and top to bottom below that. Static HTML and
// CSS; the section names no other section.

function Tick({n, className}: {n: number; className?: string}) {
	return (
		<span className={clsx(s.tick, className)}>
			<span className={s.num}>{n}</span>
		</span>
	);
}

export default function Problem() {
	const gates = copy.steps.flatMap((step) => step.gates);
	const last = copy.steps.length - 1;
	const loopGate = gates[gates.length - 1];
	// Number of the first gate on the arrow that leaves each step.
	const starts = copy.steps.map((_, i) => copy.steps.slice(0, i).reduce((n, step) => n + step.gates.length, 0));
	const columns = [0, 1, 2, 3].map((c) => gates.slice(c * 2, c * 2 + 2));
	return (
		<Spec
			id='problem'
			n='01'
			title={
				<>
					{copy.title}
					<br />
					<span className='text-ed-accent-ink'>{copy.subtitle}</span>
				</>
			}
			lede={copy.lede}
			layout='stack'
		>
			<figure className={s.figure} aria-label={copy.title}>
				<div className={s.path}>
					{copy.steps.map((step, i) => (
						<Fragment key={step.name}>
							<div className={s.node}>
								<p className={s.name}>{step.name}</p>
								<p className={s.sub}>{step.sub}</p>
								{i === last ? (
									<>
										<span className={s.curl} aria-hidden='true'>
											<Tick n={gates.length} className={s.tickCurl} />
										</span>
										<p className={s.curlLabel}>
											<span className={s.curlTag}>{loopGate.tag}</span>
											{copy.loop}
										</p>
									</>
								) : null}
							</div>
							{i < last ? (
								<div className={s.edge} style={{"--ticks": step.gates.length} as React.CSSProperties} aria-hidden='true'>
									{step.gates.map((_, j) => (
										<Tick key={j} n={starts[i] + j + 1} />
									))}
								</div>
							) : null}
						</Fragment>
					))}
				</div>
				<div className={s.grid}>
					{columns.map((pair, c) => (
						<dl key={c} className={s.col}>
							{pair.map((gate, j) => {
								const n = c * 2 + j + 1;
								return (
									<div key={gate.req}>
										<dt className={s.req}>
											<span className={s.key}>
												<span className={s.keyTick} aria-hidden='true' />
												<span>
													{n}
													{gate.tag ? ` · ${gate.tag}` : null}
												</span>
											</span>
											{gate.req}
										</dt>
										<dd className={s.mech}>{gate.mech}</dd>
									</div>
								);
							})}
						</dl>
					))}
				</div>
			</figure>
		</Spec>
	);
}

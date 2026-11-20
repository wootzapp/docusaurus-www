import React from "react";
import Link from "@docusaurus/Link";
import clsx from "clsx";
import Spec, {Note, Sub} from "./spec";
import {workspace} from "./copy";
import {workspaceVisual as v} from "./visuals.copy";
import Diagram, {bottom, type DLayout, type DNode} from "./diagram";

// § 02. The project filesystem: the data path as a chain from syscall to committed row, the enforcement points as a
// tag list, and sandbox replacement as a drawing: sandbox n and n+1 side by side over PostgreSQL, with the committed
// state crossing through the store and the rest ending with the old sandbox. Facts from research/openrind-shell.md.

function replacement(): DLayout {
	const old: DNode = {id: "old", kind: "box", x: 0, y: 44, w: 160, title: v.old.title, text: v.old.text, accentLines: [v.old.accent]};
	const next: DNode = {id: "next", kind: "box", x: 183, y: 44, w: 160, title: v.next.title, text: v.next.text};
	const pg: DNode = {id: "pg", kind: "store", x: 0, y: bottom(old) + 72, w: 343, title: v.postgres.title, text: v.postgres.text};
	const midY = (bottom(old) + pg.y) / 2 + 4;
	const a = old.x + 80;
	const b = next.x + 80;
	return {
		w: 343,
		h: bottom(pg) + 4,
		nodes: [old, next, pg],
		edges: [
			{id: "replace", points: [[a, old.y], [a, 20], [b, 20], [b, next.y]], label: [v.edges.replace], at: [(a + b) / 2, 14], anchor: "middle"},
			{id: "commit", points: [[a, bottom(old)], [a, pg.y]], accent: true, label: [v.edges.commit], at: [a + 8, midY]},
			{id: "restore", points: [[b, pg.y], [b, bottom(next)]], accent: true, label: [v.edges.restore], at: [b - 8, midY], anchor: "end"},
		],
	};
}

export default function Workspace() {
	return (
		<Spec
			id='workspace'
			n='02'
			title={
				<>
					{workspace.title}
					<br />
					<span className='text-ed-accent-ink'>{workspace.titleSub}</span>
				</>
			}
			tone='surface'
			lede={workspace.lede}
		>
			<div className='grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]'>
				<div>
					<Sub>{workspace.pathH}</Sub>
					<ol className='relative m-0 list-none p-0 pl-7'>
						{workspace.path.map(([name, copy], index) => (
							<li key={name} className='relative pb-5 last:pb-0 [&:not(:last-child)]:after:absolute [&:not(:last-child)]:after:-bottom-1 [&:not(:last-child)]:after:left-[-1.3125rem] [&:not(:last-child)]:after:top-5 [&:not(:last-child)]:after:w-px [&:not(:last-child)]:after:bg-ed-ink'>
								<span
									aria-hidden='true'
									className={clsx(
										"absolute -left-7 top-1 flex h-4 w-4 items-center justify-center rounded-full border border-ed-ink bg-ed-canvas",
										index === workspace.path.length - 1 && "bg-ed-ink"
									)}
								/>
								<p className='ed-mono m-0 text-[0.75rem] text-ed-accent-ink'>{String(index + 1).padStart(2, "0")}</p>
								<p className='m-0 text-[0.9375rem] font-medium leading-snug'>{name}</p>
								<p className='m-0 mt-1 text-[0.875rem] leading-relaxed text-ed-graphite'>{copy}</p>
							</li>
						))}
					</ol>
				</div>
				<div className='flex flex-col gap-10'>
					<div>
						<Sub>{workspace.enforcesH}</Sub>
						<ul className='m-0 flex list-none flex-col gap-2 p-0'>
							{workspace.enforces.map((line) => (
								<li key={line} className='grid grid-cols-[1rem_minmax(0,1fr)] gap-3 border border-ed-rule bg-ed-surface px-3 py-2.5 text-[0.875rem] leading-relaxed text-ed-graphite'>
									<span aria-hidden='true' className='mt-[0.45rem] h-2 w-2 bg-ed-accent' />
									{line}
								</li>
							))}
						</ul>
					</div>
					<div>
						<Sub>{workspace.survivesH}</Sub>
						<figure className='m-0' aria-label={v.label}>
							<Diagram id='replacement' layout={replacement()} label={v.label} className='max-w-[26rem]' />
						</figure>
					</div>
				</div>
			</div>
		</Spec>
	);
}

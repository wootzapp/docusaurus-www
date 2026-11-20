import React, {useEffect, useRef, useState} from "react";
import Link from "@docusaurus/Link";
import clsx from "clsx";
import styles from "./session-figure.module.css";
import {sessionFigure as copy} from "./session-figure.copy";
import {evidenceGroups, type EvidenceGroup} from "@site/src/data/research";

// Figure 1: one recorded session and its capture points, drawn as a cycle. Four stage columns inside the shell
// boundary, then the serve track that carries the new checkpoint back to the gateway. The Record column keeps the
// three evidence groups from src/data/research.ts (the model layer inside a dashed frame, all a model proxy sees;
// the hypervisor and W8 groups below it) and fills them with this session's events, each keyed by the layer that
// keeps it. The category words of the evidence table sit in the legend line under the panel. The values are
// schematic; the caption says so.
//
// Timing: one cycle lasts PERIOD ms. Each row carries the fraction of the cycle at which it appears (`t`). A Record
// row appears right after the Run event that produces it; every heading appears with its first row. Rows fade
// together near the end, the version counter advances, and the cycle restarts. Without JavaScript, or when the
// viewer asks for reduced motion, the completed state renders as is.

const PERIOD = 14000;
const HOLD_UNTIL = 0.955;
const FADE_UNTIL = 0.99;
const METER = {from: 0.69, to: 0.8};
const TRAVEL = {from: 0.85, to: 0.92};
// The chip starts this far left of the track's end, clear of the "checkpoint" label.
const TRAVEL_INSET = 32;
const FIRST_VERSION = 7;

type Row = {t: number; k: string; v: string; tag?: string; deny?: boolean; fn?: number};

// What the session produces as it runs. Order matches the Record rows top to bottom.
const ledger = (v: number): Row[] => [
	{t: 0.03, k: "model", v: `turn 7 · v${v}`},
	{t: 0.1, k: "proc", v: "bash · pytest -q"},
	{t: 0.17, k: "net", v: "pypi.org:443", tag: "allow"},
	{t: 0.22, k: "net", v: "203.0.113.7:25", tag: "deny", deny: true},
	{t: 0.27, k: "file", v: "parse.py +18 −3", tag: "commit"},
	{t: 0.32, k: "page", v: "login form", tag: "step 3"},
	{t: 0.38, k: "proc", v: "exit 0 · 14 passed"},
	{t: 0.42, k: "session", v: "complete · ws 4e2a"},
];

// What each capture layer records of that run, indexed like evidenceGroups: [model layer, below the harness,
// inside the page]. Gateway rows after the model turn, the hypervisor rows after the shell command, the allow, the
// deny and the commit, the W8 row after the page step.
const captureRows: Row[][] = [
	[
		{t: 0.05, k: copy.layers.gateway, v: "turn 7 · signed ctx"},
		{t: 0.07, k: copy.layers.gateway, v: "prompt · completion"},
		{t: 0.09, k: copy.layers.gateway, v: "tool call · result seen"},
	],
	[
		{t: 0.12, k: copy.layers.hypervisor, v: "proc · bash"},
		{t: 0.19, k: copy.layers.hypervisor, v: "net · pypi.org:443", tag: "allow"},
		{t: 0.24, k: copy.layers.hypervisor, v: "net · 203.0.113.7:25", tag: "deny", deny: true},
		{t: 0.29, k: copy.layers.hypervisor, v: "commit · parse.py"},
	],
	[{t: 0.34, k: copy.layers.browser, v: "login form · step 3"}],
];

const verify: Row[] = [
	{t: 0.47, k: "tests", v: "14 passed · 0 failed"},
	{t: 0.52, k: "turns", v: "6 safe · 1 bad + hint"},
	{t: 0.57, k: "review", v: "approved · rev 3"},
];

const train = (v: number): Row[] => [
	{t: 0.62, k: "dataset", v: "sealed · 3f9c…e1"},
	{t: 0.66, k: "masks", v: "CE 6 · KL 1 turns"},
	{t: 0.82, k: "checkpoint", v: `model v${v + 1} saved`},
];

const layerName = (group: EvidenceGroup) =>
	group.layer === "browser" ? copy.layers.browser : group.layer === "hypervisor" ? copy.layers.hypervisor : copy.layers.gateway;

const lower = (s: string) => s.charAt(0).toLowerCase() + s.slice(1);

function appear(t: number): Keyframe[] {
	const on = Math.min(t + 0.02, HOLD_UNTIL - 0.01);
	return [
		{opacity: 0, transform: "translateY(4px)", offset: 0},
		{opacity: 0, transform: "translateY(4px)", offset: t},
		{opacity: 1, transform: "none", offset: on},
		{opacity: 1, transform: "none", offset: HOLD_UNTIL},
		{opacity: 0, transform: "none", offset: FADE_UNTIL},
		{opacity: 0, transform: "none", offset: 1},
	];
}

function Marker({n}: {n: number}) {
	return <sup className={styles.fn}>{n}</sup>;
}

function Rows({rows}: {rows: Row[]}) {
	return (
		<ol className={styles.rows}>
			{rows.map((row, index) => (
				// Keys stay stable across version changes so a row keeps its running animation when its text updates.
				<li key={`${row.k}-${index}`} className={styles.row} data-in={row.t}>
					<span className={styles.k}>{row.k}</span>
					<span className={styles.v}>
						{row.v}
						{row.fn ? <Marker n={row.fn} /> : null}
					</span>
					{row.tag ? <span className={clsx(styles.tag, row.deny && styles["tag--deny"])}>{row.tag}</span> : <span />}
				</li>
			))}
		</ol>
	);
}

// A stage column. The heading appears with the column's first row (`t`).
function Column({n, title, aside, keyWidth, t, fn, children}: {n: string; title: string; aside?: string; keyWidth: string; t: number; fn?: number; children: React.ReactNode}) {
	return (
		<div className={styles.col} style={{"--k": keyWidth} as React.CSSProperties}>
			<div className={styles.colHead} data-in={t}>
				<span>
					<b>{n}</b> {title}
					{fn ? <Marker n={fn} /> : null}
				</span>
				{aside ? <span className={styles.colAside}>{aside}</span> : null}
			</div>
			{children}
		</div>
	);
}

// The Record column: the evidence groups from research.ts, each filled with this session's events. The dashed frame
// and the divider are structure and stay put; each group heading appears with its first row.
function Capture() {
	const groups = evidenceGroups.map((group, gi) => ({
		label: group.label,
		proxy: group.rows.every((row) => row.proxy),
		rows: captureRows[gi] ?? [],
	}));
	const proxyGroups = groups.filter((group) => group.proxy);
	const beyondGroups = groups.filter((group) => !group.proxy);
	return (
		<>
			<div className={styles.proxy}>
				<span className={styles.frameLabel}>{copy.proxyLabel}</span>
				{proxyGroups.map((group) => (
					<div key={group.label}>
						<p className={styles.groupHead} data-in={group.rows[0]?.t ?? 0}>
							{group.label}
						</p>
						<Rows rows={group.rows} />
					</div>
				))}
			</div>
			<p className={styles.beyond}>{copy.beyondLabel}</p>
			{beyondGroups.map((group) => (
				<div key={group.label} className={styles.group}>
					<p className={styles.groupHead} data-in={group.rows[0]?.t ?? 0}>
						{group.label}
					</p>
					<Rows rows={group.rows} />
				</div>
			))}
		</>
	);
}

export default function SessionFigure({className}: {className?: string}) {
	const root = useRef<HTMLDivElement>(null);
	const [version, setVersion] = useState(FIRST_VERSION);
	const [run, record, verifyName, trainName, serveName] = copy.columns;

	useEffect(() => {
		const el = root.current;
		if (!el || typeof el.animate !== "function") return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

		let cancelled = false;
		let running: Animation[] = [];

		const cycle = () => {
			running = [];
			el.querySelectorAll<HTMLElement>("[data-in]").forEach((node) => {
				running.push(node.animate(appear(Number(node.dataset.in)), {duration: PERIOD, fill: "both", easing: "linear"}));
			});
			const meter = el.querySelector<HTMLElement>("[data-meter]");
			if (meter) {
				running.push(
					meter.animate(
						[
							{transform: "scaleX(0)", offset: 0},
							{transform: "scaleX(0)", offset: METER.from},
							{transform: "scaleX(1)", offset: METER.to},
							{transform: "scaleX(1)", offset: HOLD_UNTIL},
							{transform: "scaleX(0)", offset: FADE_UNTIL},
							{transform: "scaleX(0)", offset: 1},
						],
						{duration: PERIOD, fill: "both", easing: "linear"}
					)
				);
			}
			const chip = el.querySelector<HTMLElement>("[data-chip]");
			const track = el.querySelector<HTMLElement>("[data-track]");
			if (chip && track) {
				const distance = Math.max(0, track.clientWidth - chip.offsetWidth - chip.offsetLeft - TRAVEL_INSET);
				running.push(
					chip.animate(
						[
							{opacity: 0, transform: `translateX(${distance}px)`, offset: 0},
							{opacity: 0, transform: `translateX(${distance}px)`, offset: TRAVEL.from},
							{opacity: 1, transform: `translateX(${distance}px)`, offset: TRAVEL.from + 0.01},
							{opacity: 1, transform: "translateX(0)", offset: TRAVEL.to, easing: "ease-in-out"},
							{opacity: 1, transform: "translateX(0)", offset: HOLD_UNTIL},
							{opacity: 0, transform: "translateX(0)", offset: FADE_UNTIL},
							{opacity: 0, transform: "translateX(0)", offset: 1},
						],
						{duration: PERIOD, fill: "both", easing: "linear"}
					)
				);
			}
			Promise.all(running.map((a) => a.finished))
				.then(() => {
					if (cancelled) return;
					setVersion((v) => v + 1);
					cycle();
				})
				.catch(() => undefined);
		};

		// Pause the cycle while the figure is off screen.
		const observer = new IntersectionObserver(([entry]) => {
			running.forEach((a) => (entry.isIntersecting ? a.play() : a.pause()));
		});
		observer.observe(el);
		cycle();

		return () => {
			cancelled = true;
			observer.disconnect();
			running.forEach((a) => a.cancel());
		};
	}, []);

	return (
		<figure id='session' className={clsx(styles.figure, className)} aria-label={copy.barTitle}>
			<div ref={root} className={styles.panel}>
				<div className={styles.bar}>
					<span>
						<b>Fig. 1</b> {copy.barTitle}
					</span>
					<span>schematic · cycle {version - FIRST_VERSION + 1}</span>
				</div>
				<div className={styles.boundary}>
					<span className={styles.edgeLabel}>
						<span className={styles.edgeText}>{copy.boundaryLabel}</span>
					</span>
					<div className={styles.columns}>
						<Column n='01' title={run} keyWidth='3.25rem' t={ledger(version)[0].t}>
							<Rows rows={ledger(version)} />
						</Column>
						<Column n='02' title={record} aside={copy.recordLayers} keyWidth='4.5rem' t={captureRows[0][0].t}>
							<Capture />
						</Column>
						<Column n='03' title={verifyName} keyWidth='3.25rem' t={verify[0].t}>
							<Rows rows={verify} />
						</Column>
						<Column n='04' title={trainName} keyWidth='4.75rem' t={train(version)[0].t}>
							<Rows rows={train(version).slice(0, 2)} />
							<div className={styles.meter} aria-hidden='true' data-in={METER.from}>
								<div className={styles.meterFill} data-meter='true' />
							</div>
							<Rows rows={train(version).slice(2)} />
						</Column>
					</div>
					<div className={styles.serve}>
						<span className={styles.serveLabel}>
							<b>05</b> {serveName}
						</span>
						<div className={styles.track} data-track='true'>
							<span className={styles.chip} data-chip='true'>
								model v{version + 1} → gateway
							</span>
						</div>
						<span className={styles.serveEnd}>{copy.checkpointLabel}</span>
					</div>
					<span className={clsx(styles.edgeLabel, styles["edgeLabel--exits"])}>
						<span className={styles.edgeText}>{copy.exitsLabel}</span>
					</span>
				</div>
			</div>
		</figure>
	);
}

import React from "react";
import clsx from "clsx";
import styles from "./diagram.module.css";

// A small renderer for the block diagrams on /factory. A layout is a list of nodes (boxes, stores, groups, bare text)
// and edges (polylines with an arrowhead, a bar end, or no end) in SVG user units. Each section hand-places its
// nodes; `wrap` and `nodeHeight` keep the line breaks and box heights consistent with the font sizes in the CSS.

export type NodeKind = "box" | "store" | "group" | "outer" | "text";

export type DNode = {
	id: string;
	kind: NodeKind;
	x: number;
	y: number;
	w: number;
	h?: number;
	title?: string;
	text?: string;
	chip?: string;
	muted?: boolean;
	// Lines drawn in accent-ink, for the one item an accent edge carries.
	accentLines?: string[];
	// Group titles sit on the top border; `titleInside` keeps a group's title inside the frame instead.
	titleInside?: boolean;
	// Group titles render in capitals; `rawTitle` keeps the title as written, for a path such as /sandbox/work.
	rawTitle?: boolean;
};

export type DEdge = {
	id: string;
	points: [number, number][];
	label?: string[];
	at?: [number, number];
	anchor?: "start" | "middle" | "end";
	rotate?: number;
	dashed?: boolean;
	accent?: boolean;
	end?: "arrow" | "bar" | "none";
};

export type DLayout = {w: number; h: number; nodes: DNode[]; edges: DEdge[]};

const MONO = 6.6; // advance of JetBrains Mono at 11px
const CHIP = 6.9; // advance at 10px with 0.08em tracking
const LINE = 15;
const PAD = 10;
const TITLE = 19;

export function wrap(text: string, maxChars: number): string[] {
	const out: string[] = [];
	for (const para of text.split("\n")) {
		let cur = "";
		for (const word of para.split(" ")) {
			const next = cur ? `${cur} ${word}` : word;
			if (next.length > maxChars && cur) {
				out.push(cur);
				cur = word;
			} else {
				cur = next;
			}
		}
		out.push(cur);
	}
	return out;
}

export function nodeLines(node: DNode): string[] {
	if (!node.text) return [];
	const inner = node.kind === "text" ? node.w : node.w - PAD * 2;
	return wrap(node.text, Math.max(8, Math.floor(inner / MONO)));
}

export function nodeHeight(node: DNode): number {
	if (node.h !== undefined) return node.h;
	const lines = nodeLines(node).length;
	if (node.kind === "text") return lines * LINE;
	return PAD + (node.title ? TITLE : 4) + lines * LINE + (lines ? 4 : 0) + 2;
}

export function bottom(node: DNode): number {
	return node.y + nodeHeight(node);
}

export function cx(node: DNode): number {
	return node.x + node.w / 2;
}

export function cy(node: DNode): number {
	return node.y + nodeHeight(node) / 2;
}

function Chip({node, h, fill}: {node: DNode; h: number; fill: string}) {
	if (!node.chip) return null;
	const text = node.chip.toUpperCase();
	const w = text.length * CHIP + 14;
	const x = node.x + node.w - PAD - w;
	const y = node.y - 8;
	return (
		<g>
			<rect x={x} y={y} width={w} height={16} fill={fill} />
			<text x={x + w / 2} y={y + 11.5} textAnchor='middle' className={styles.chipText}>
				{text}
			</text>
		</g>
	);
}

function Node({node, bg, chip}: {node: DNode; bg: string; chip: string}) {
	const h = nodeHeight(node);
	const lines = nodeLines(node);
	if (node.kind === "text") {
		return (
			<text x={node.x} y={node.y + 11} className={clsx(styles.line, node.muted && styles["line--muted"])}>
				{lines.map((line, i) => (
					<tspan key={i} x={node.x} dy={i === 0 ? 0 : LINE}>
						{line}
					</tspan>
				))}
			</text>
		);
	}
	if (node.kind === "group" || node.kind === "outer") {
		const title = node.rawTitle ? node.title ?? "" : node.title?.toUpperCase() ?? "";
		const tw = title.length * 7.5 + 8;
		return (
			<g>
				<rect x={node.x} y={node.y} width={node.w} height={h} className={node.kind === "outer" ? styles["group--outer"] : styles.group} />
				{title ? (
					node.titleInside ? (
						<text x={node.x + PAD} y={node.y + 16} className={styles.groupTitle}>
							{title}
						</text>
					) : (
						<g>
							<rect x={node.x + 8} y={node.y - 8} width={tw} height={16} fill={bg} />
							<text x={node.x + 12} y={node.y + 4} className={styles.groupTitle}>
								{title}
							</text>
						</g>
					)
				) : null}
				{lines.length ? (
					<text x={node.x + PAD} y={node.y + (node.titleInside ? 34 : 20)} className={clsx(styles.line, styles["line--muted"])}>
						{lines.map((line, i) => (
							<tspan key={i} x={node.x + PAD} dy={i === 0 ? 0 : LINE}>
								{line}
							</tspan>
						))}
					</text>
				) : null}
				<Chip node={node} h={h} fill={chip} />
			</g>
		);
	}
	const textY = node.y + PAD + (node.title ? TITLE + 4 : 6);
	return (
		<g>
			<rect x={node.x} y={node.y} width={node.w} height={h} className={clsx(styles.box, node.muted && styles["box--muted"])} />
			{node.kind === "store" ? <rect x={node.x + 3} y={node.y + 3} width={node.w - 6} height={h - 6} className={styles.store} /> : null}
			{node.title ? (
				<text x={node.x + PAD} y={node.y + PAD + 9} className={styles.title}>
					{node.title}
				</text>
			) : null}
			{lines.length ? (
				<text x={node.x + PAD} y={textY} className={styles.line}>
					{lines.map((line, i) => (
						<tspan key={i} x={node.x + PAD} dy={i === 0 ? 0 : LINE} className={node.accentLines?.includes(line) ? styles["line--accent"] : undefined}>
							{line}
						</tspan>
					))}
				</text>
			) : null}
			<Chip node={node} h={h} fill={chip} />
		</g>
	);
}

function Edge({edge, ids}: {edge: DEdge; ids: {arrow: string; accent: string; dashed: string; bar: string}}) {
	const end = edge.end ?? "arrow";
	const marker = end === "none" ? undefined : end === "bar" ? `url(#${ids.bar})` : edge.accent ? `url(#${ids.accent})` : edge.dashed ? `url(#${ids.dashed})` : `url(#${ids.arrow})`;
	const [lx, ly] = edge.at ?? edge.points[edge.points.length - 1];
	return (
		<g>
			<polyline
				points={edge.points.map(([x, y]) => `${x},${y}`).join(" ")}
				className={clsx(styles.edge, edge.dashed && styles["edge--dashed"], edge.accent && styles["edge--accent"])}
				markerEnd={marker}
			/>
			{edge.label ? (
				<text
					x={lx}
					y={ly}
					textAnchor={edge.anchor ?? "start"}
					className={clsx(styles.edgeLabel, edge.accent && styles["edgeLabel--accent"])}
					transform={edge.rotate ? `rotate(${edge.rotate} ${lx} ${ly})` : undefined}
				>
					{edge.label.map((line, i) => (
						<tspan key={i} x={lx} dy={i === 0 ? 0 : 12}>
							{line}
						</tspan>
					))}
				</text>
			) : null}
		</g>
	);
}

export default function Diagram({
	id,
	layout,
	label,
	show = "always",
	bg = "#f0f0f0",
	chip = "#fbe6d2",
	className,
}: {
	id: string;
	layout: DLayout;
	label: string;
	show?: "always" | "wide" | "narrow";
	bg?: string;
	chip?: string;
	className?: string;
}) {
	const ids = {arrow: `${id}-arrow`, accent: `${id}-arrow-accent`, dashed: `${id}-arrow-dashed`, bar: `${id}-bar`};
	return (
		<svg
			className={clsx(styles.svg, show === "wide" && styles.wide, show === "narrow" && styles.narrow, className)}
			viewBox={`0 0 ${layout.w} ${layout.h}`}
			role='img'
			aria-label={label}
		>
			<defs>
				<marker id={ids.arrow} markerWidth='8' markerHeight='8' refX='7.5' refY='4' orient='auto' markerUnits='userSpaceOnUse'>
					<path d='M0 0 L8 4 L0 8 Z' fill='#131315' />
				</marker>
				<marker id={ids.accent} markerWidth='9' markerHeight='9' refX='8.5' refY='4.5' orient='auto' markerUnits='userSpaceOnUse'>
					<path d='M0 0 L9 4.5 L0 9 Z' fill='#f28b32' />
				</marker>
				<marker id={ids.dashed} markerWidth='8' markerHeight='8' refX='7.5' refY='4' orient='auto' markerUnits='userSpaceOnUse'>
					<path d='M0 0 L8 4 L0 8 Z' fill='#4f4f53' />
				</marker>
				<marker id={ids.bar} markerWidth='6' markerHeight='12' refX='3' refY='6' orient='auto' markerUnits='userSpaceOnUse'>
					<path d='M3 0 L3 12' stroke='#131315' strokeWidth='2' />
				</marker>
			</defs>
			{layout.nodes.map((node) => (
				<Node key={node.id} node={node} bg={bg} chip={chip} />
			))}
			{layout.edges.map((edge) => (
				<Edge key={edge.id} edge={edge} ids={ids} />
			))}
		</svg>
	);
}

// Legend under a diagram: one swatch per line style or marker the drawing uses.
export type LegendItem = {kind: "solid" | "dashed" | "bar" | "accent" | "cross" | "chip" | "store" | string; text: string};

export function Legend({items, className, chip = "#fbe6d2"}: {items: LegendItem[]; className?: string; chip?: string}) {
	return (
		<ul className={clsx(styles.legend, className)}>
			{items.map((item) => {
				const line = item.kind === "solid" || item.kind === "dashed" || item.kind === "bar" || item.kind === "accent";
				const head = item.kind === "solid" ? "#131315" : item.kind === "dashed" ? "#4f4f53" : item.kind === "accent" ? "#f28b32" : null;
				return (
					<li key={item.text}>
						<svg width='30' height='14' viewBox='0 0 30 14' aria-hidden='true' className={styles.swatch}>
							{item.kind === "chip" ? <rect x='1' y='1' width='28' height='12' fill={chip} /> : null}
							{item.kind === "store" ? (
								<g>
									<rect x='1.5' y='1.5' width='27' height='11' className={styles.store} />
									<rect x='4.5' y='4.5' width='21' height='5' className={styles.store} />
								</g>
							) : null}
							{item.kind === "cross" ? (
								<text x='15' y='11' textAnchor='middle' className={styles.cross}>
									×
								</text>
							) : null}
							{line ? (
								<line
									x1='1'
									y1='7'
									x2={item.kind === "bar" ? 24 : 28}
									y2='7'
									className={clsx(styles.edge, item.kind === "dashed" && styles["edge--dashed"], item.kind === "accent" && styles["edge--accent"])}
								/>
							) : null}
							{item.kind === "bar" ? <line x1='25' y1='1' x2='25' y2='13' stroke='#131315' strokeWidth='2' /> : null}
							{head ? <path d='M22 3 L29 7 L22 11 Z' fill={head} /> : null}
						</svg>
						<span>{item.text}</span>
					</li>
				);
			})}
		</ul>
	);
}

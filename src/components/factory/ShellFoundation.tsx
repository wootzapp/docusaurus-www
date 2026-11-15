import React from "react";
import Section from "../editorial/section";
import Eyebrow from "../editorial/eyebrow";
import CtaLink from "../editorial/cta-link";
import useAnchor from "../editorial/use-anchor";
import CtfEvidence from "./CtfEvidence";
import {links} from "@site/src/data/research";
import styles from "./Factory.module.css";

const layers = [
	{
		name: "Execution",
		mechanism: "Native processes run inside a supervised Linux sandbox. The Desktop deployment hosts it in a VM, with filesystem, process, and network controls.",
		use: "Run the shell, compiler, and tests that produce the agent’s actual tool feedback.",
	},
	{
		name: "Project state",
		mechanism: "A supervisor-owned FUSE mount serves /sandbox/work through a Rust daemon. PostgreSQL stores inode metadata and sparse 256 KiB chunks; commit barriers and a fenced lease govern writes.",
		use: "Inspect committed code and artifacts across sandbox replacement, using the same native filesystem interface as the agent.",
	},
	{
		name: "Model context",
		mechanism: "Signed conversation context binds managed calls to a workspace, sandbox, and agent. The gateway records supported messages and model-visible tool calls and results.",
		use: "Recover recorded prefixes for session judging, turn selection, and grounded hint validation.",
	},
	{
		name: "Human demonstrations",
		mechanism: "A separate Desktop recorder pairs input events with before/after frames and display-relative coordinates.",
		use: "Inspect the visual evidence around a human action when designing supervision.",
	},
];

export default function ShellFoundation() {
	useAnchor("factory-agent");
	useAnchor("factory-capture");
	return (
		<Section id='factory-runtime' tone='surface' innerClassName={styles.compactSection}>
			<div className={styles.architectureIntro}>
				<Eyebrow>01 / Execution architecture</Eyebrow>
				<h2 className='ed-h2 m-0 mt-4'>More than a token gateway.<br /><span>Deeper integration for trace capture.</span></h2>
				<p className='ed-lede m-0 text-ed-graphite'>Model traffic records the agent’s view of a run. Openrind also integrates the execution environment: native tools, committed project state, browser observations, and independent task-outcome records. Researchers can inspect evidence beyond the model API boundary.</p>
			</div>
			<table className={styles.architectureTable} role='table' aria-label='Runtime mechanisms and research use'>
				<thead role='rowgroup'><tr role='row'><th id='factory-layer' scope='col'>Layer</th><th id='factory-mechanism' scope='col'>Implementation</th><th id='factory-research-use' scope='col'>Research use</th></tr></thead>
				<tbody role='rowgroup'>
					{layers.map((layer, index) => (
						<tr key={layer.name} role='row'>
							<th id={`factory-layer-${index}`} scope='row' role='rowheader'>{layer.name}</th>
							<td role='cell' headers={`factory-layer-${index} factory-mechanism`}><span className={styles.mobileLabel} aria-hidden='true'>Implementation</span>{layer.mechanism}</td>
							<td role='cell' headers={`factory-layer-${index} factory-research-use`}><span className={styles.mobileLabel} aria-hidden='true'>Research use</span>{layer.use}</td>
						</tr>
					))}
				</tbody>
			</table>
			<CtfEvidence />
			<p id='factory-agent' className={styles.compatibility}>Agent profiles: Claude Code · Codex · OpenClaw · OpenHands. Each profile configures its launcher, model route, and capture adapter.</p>
			<div id='factory-capture' className={styles.runtimeFooter}>
				<div className={styles.foundationLinks}>
					<CtaLink href='/research/openrind-shell' variant='text'>Runtime writeup</CtaLink>
					<CtaLink href={links.openrindArchitecture} variant='text'>Architecture &amp; source</CtaLink>
				</div>
				<p className={styles.attribution}>Sandbox enforcement built on <a href='https://build.nvidia.com/openshell' target='_blank' rel='noopener noreferrer'>NVIDIA OpenShell</a>.</p>
			</div>
			<details className={styles.runtimeDetails}>
				<summary>Persistence and capture contracts</summary>
				<div>
					<p>Committed filesystem state survives sandbox replacement. Live processes and uncommitted bytes do not. The FUSE tables retain current state rather than an append-only action history. A PostgreSQL advisory lock and expiring writer lease prevent stale writers from continuing after fencing.</p>
					<p>Windows Desktop runs Linux sandboxes in WSL2; Linux deployments use the host’s Docker runtime. Managed model capture and host desktop recording are separate paths. Capture is best effort; incomplete sessions are excluded from the training path. The current OPSD trainer consumes supported text and tool histories, not screen video.</p>
				</div>
			</details>
		</Section>
	);
}

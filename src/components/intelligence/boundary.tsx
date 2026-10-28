import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import Part from "./part";

// Layer and control descriptions follow the OpenShell architecture and security documentation.
type Layer = {name: string; role: string; controls: string[]};

const layers: Layer[] = [
	{name: "Gateway", role: "Control plane", controls: ["Authenticates users", "Issues per-sandbox credentials", "Delivers policy", "Policy prover"]},
	{name: "Supervisor", role: "Trusted side of the boundary", controls: ["Default-deny egress", "Binary identity, SHA-256", "Credential substitution", "DNS and private-IP guard", "Allow and deny log"]},
	{name: "Sandbox", role: "The agent runs here", controls: ["Non-root process", "Landlock file rules", "seccomp syscall filters", "Own network namespace", "No credentials", "One egress path"]},
];

const layerStyles = [
	{box: "border-ed-ink bg-ed-surface", chip: "border-ed-rule text-ed-graphite"},
	{box: "border-ed-ink bg-ed-canvas", chip: "border-ed-ink/30 text-ed-ink"},
	{box: "border-ed-accent-ink bg-ed-surface", chip: "border-ed-accent-ink text-ed-accent-ink"},
];

function Layers({depth = 0}: {depth?: number}) {
	const layer = layers[depth];
	const style = layerStyles[depth];
	return (
		<div className={clsx("border p-4 sm:p-5", style.box)}>
			<div className='flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1'>
				<span className='text-[1.0625rem] font-medium'>{layer.name}</span>
				<span className='ed-eyebrow text-ed-smoke'>{layer.role}</span>
			</div>
			<ul className='m-0 mt-3 flex list-none flex-wrap gap-1.5 p-0'>
				{layer.controls.map((control) => (
					<li key={control} className={clsx("ed-mono border px-2 py-1 text-[0.75rem] leading-none", style.chip)}>
						{control}
					</li>
				))}
			</ul>
			{depth + 1 < layers.length ? (
				<div className='mt-4'>
					<Layers depth={depth + 1} />
				</div>
			) : (
				<p className='ed-mono m-0 mt-4 text-[0.8125rem] text-ed-smoke'>Your harness, unchanged. Every connection leaves through the supervisor.</p>
			)}
		</div>
	);
}

const enforced = [
	{name: "Execution", copy: "Enforced at the kernel. Landlock limits files, seccomp limits syscalls, and the agent runs as a non-root process in its own network namespace with one egress path."},
	{name: "Policy", copy: "Lives in the supervisor and the gateway. The agent cannot read or change it. Proposed rules pass the policy prover, and flagged changes wait for human review."},
	{name: "Credentials", copy: "Stay outside the sandbox. The agent sees a placeholder that the supervisor resolves only for approved hosts, ports, and paths."},
	{name: "The record", copy: "Every connection is checked per host, port, and calling binary, and every allow and deny is logged. The hypervisor keeps processes, file changes, egress including denied attempts, and policy decisions. W8 keeps the page at every step."},
	{name: "Training", copy: "Only runs your team approves enter training, and each reward points to its evidence in the record."},
];

export default function Boundary() {
	return (
		<Part kicker='The runtime' title='One boundary, decided outside the agent.'>
			<figure className='m-0 border border-dashed border-ed-ink/50 p-4 sm:p-5'>
				<div className='flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1'>
					<span className='text-[1.0625rem] font-medium'>Your perimeter</span>
					<span className='ed-eyebrow text-ed-smoke'>Recording, training, and serving</span>
				</div>
				<div className='mt-4'>
					<Layers />
				</div>
			</figure>
			<dl className='m-0 border-t border-ed-ink'>
				{enforced.map((item, index) => (
					<div key={item.name} className='grid grid-cols-[2.5rem_minmax(0,1fr)] gap-x-4 gap-y-2 border-b border-ed-rule py-5 lg:grid-cols-[2.5rem_minmax(0,1fr)_minmax(0,3fr)] lg:gap-x-8'>
						<span className='ed-mono pt-0.5 text-[0.8125rem] text-ed-accent-ink'>{String(index + 1).padStart(2, "0")}</span>
						<dt className='text-[1.0625rem] font-medium leading-snug'>{item.name}</dt>
						<dd className='col-start-2 m-0 text-[0.9375rem] leading-relaxed text-ed-graphite lg:col-start-3'>{item.copy}</dd>
					</div>
				))}
			</dl>
			<div className='flex flex-col gap-3 border-l-2 border-ed-accent pl-5'>
				<span className='ed-eyebrow text-ed-smoke'>By extension, the hypervisor</span>
				<p className='m-0 max-w-[48rem] text-[1rem] leading-relaxed text-ed-graphite'>
					WootzApp's hypervisor is OpenShell with the project filesystem on a supervised FUSE mount, so file I/O passes through one daemon under
					the same policy as the network, and the record of a run holds both.{" "}
					<Link to='/research/openrind-shell' className='ed-link whitespace-nowrap'>
						Openrind Shell →
					</Link>
				</p>
			</div>
			<p className='ed-mono m-0 text-[0.75rem] text-ed-smoke'>
				Built on NVIDIA OpenShell; no NVIDIA endorsement implied. Layer and control descriptions follow the OpenShell{" "}
				<a href='https://docs.nvidia.com/openshell/about/architecture' target='_blank' rel='noopener noreferrer' className='ed-link'>
					architecture
				</a>{" "}
				and{" "}
				<a href='https://docs.nvidia.com/openshell/security/best-practices' target='_blank' rel='noopener noreferrer' className='ed-link'>
					security
				</a>{" "}
				documentation.
			</p>
		</Part>
	);
}

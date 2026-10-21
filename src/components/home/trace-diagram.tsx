import React from "react";
import {LuBot, LuUser, LuArrowDown, LuDatabase, LuCpu} from "react-icons/lu";
import LayerTag, {type Layer} from "./layer-tag";

const lanes: {layer: Layer; label: string}[] = [
	{layer: "browser", label: "Page state at every step"},
	{layer: "hypervisor", label: "Processes · egress · file changes"},
];

function Arrow() {
	return (
		<div className='flex justify-center py-2 text-ed-smoke' aria-hidden='true'>
			<LuArrowDown />
		</div>
	);
}

// Schematic of the capture pipeline: who works, where it is recorded, what it becomes.
export default function TraceDiagram() {
	return (
		<figure className='ed-card m-0 flex flex-col p-5 sm:p-6' aria-label='Agents and experts are recorded by W8 and the hypervisor, below the point where a model proxy stops, then turned into training data and custom models.'>
			<div className='grid grid-cols-2 gap-3'>
				{[
					{icon: <LuBot />, label: "Agent", sub: "agent traces"},
					{icon: <LuUser />, label: "Expert", sub: "work traces"},
				].map((source) => (
					<div key={source.label} className='flex items-center gap-3 rounded-xl border border-ed-rule bg-ed-canvas px-3 py-2.5'>
						<span className='ed-icon h-9 w-9 text-base'>{source.icon}</span>
						<span className='flex flex-col leading-tight'>
							<span className='text-[0.9375rem] font-semibold'>{source.label}</span>
							<span className='ed-mono text-[0.75rem] text-ed-smoke'>{source.sub}</span>
						</span>
					</div>
				))}
			</div>

			<Arrow />

			<div className='flex flex-col gap-4 rounded-xl border border-ed-rule p-4'>
				<div className='flex flex-col gap-2 text-ed-smoke'>
					<div className='flex flex-wrap items-center justify-between gap-2'>
						<LayerTag layer='proxy' />
						<span className='text-[0.8125rem]'>prompts · completions</span>
					</div>
					<div className='flex items-center gap-2' aria-hidden='true'>
						<span className='h-px flex-1 border-t border-dashed border-ed-rule' />
						<span className='ed-mono text-[0.75rem] uppercase tracking-wider'>proxy-based capture ends here</span>
						<span className='h-px flex-1 border-t border-dashed border-ed-rule' />
					</div>
				</div>
				{lanes.map((lane) => (
					<div key={lane.label} className='flex flex-col gap-2.5'>
						<div className='flex flex-wrap items-center justify-between gap-2'>
							<LayerTag layer={lane.layer} />
							<span className='text-[0.8125rem] text-ed-graphite'>{lane.label}</span>
						</div>
						<div className='ed-lane' aria-hidden='true'>
							<span className='ed-lane__dot' />
							<span className='ed-lane__dot ed-lane__dot--2' />
							<span className='ed-lane__dot ed-lane__dot--3' />
						</div>
					</div>
				))}
				<div className='flex items-center justify-between gap-2 border-t border-ed-rule pt-3'>
					<LayerTag layer='team' />
					<span className='text-[0.8125rem] text-ed-graphite'>Engineered into training data</span>
				</div>
			</div>

			<Arrow />

			<div className='grid grid-cols-1 gap-3 sm:grid-cols-2'>
				{[
					{icon: <LuDatabase />, label: "Datasets · evals · environments", sub: "for model labs"},
					{icon: <LuCpu />, label: "Custom small models", sub: "for enterprises"},
				].map((output) => (
					<div key={output.label} className='flex items-center gap-3 rounded-xl bg-ed-ink px-3 py-2.5 text-ed-canvas'>
						<span className='ed-icon h-9 w-9 bg-white/10 text-base text-ed-accent'>{output.icon}</span>
						<span className='flex flex-col leading-tight'>
							<span className='text-[0.875rem] font-semibold'>{output.label}</span>
							<span className='ed-mono text-[0.75rem] text-ed-canvas/70'>{output.sub}</span>
						</span>
					</div>
				))}
			</div>
		</figure>
	);
}

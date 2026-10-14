import React from "react";

const lines = [
	"A model endpoint sees what the model returns.",
	"A harness trace sees what the harness emits.",
	"A screenshot sees what the camera captured.",
];

export default function BlindSpot() {
	return (
		<section className='bg-ed-ink text-ed-canvas'>
			<div className='ed-container flex flex-col gap-6 py-20 sm:py-24 lg:py-36'>
				{lines.map((line) => (
					<p key={line} className='ed-statement m-0 text-ed-canvas/70'>
						{line}
					</p>
				))}
				<p className='ed-statement m-0 text-ed-accent'>Others train on what your harness exposes. We reveal what your harness cannot see.</p>
				<p className='ed-lede m-0 mt-4 text-ed-canvas/80'>That&apos;s the evidence other layers cannot independently establish.</p>
			</div>
		</section>
	);
}

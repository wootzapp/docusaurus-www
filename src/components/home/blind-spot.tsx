import React from "react";

export default function BlindSpot() {
	return (
		<section className='bg-ed-ink text-ed-canvas'>
			<div className='ed-container flex flex-col gap-4 py-20 sm:py-24 lg:py-32'>
				<p className='ed-statement m-0 text-ed-canvas/70'>A model proxy sees what the model said.</p>
				<p className='ed-statement m-0 text-ed-accent'>We see what the agent did.</p>
				<p className='ed-lede m-0 mt-4 text-ed-canvas/75'>Below the harness. Inside the browser.</p>
			</div>
		</section>
	);
}

import React from "react";
import Section from "../editorial/section";
import Eyebrow from "../editorial/eyebrow";
import Hypervisor from "./hypervisor";
import BrowserEvidence from "./browser-evidence";

export default function Technology() {
	return (
		<Section id='technology'>
			<div className='flex flex-col gap-6'>
				<Eyebrow>The technology / Two observation points</Eyebrow>
				<h2 className='ed-h2 m-0 max-w-[58rem]'>Most tools see the agent&apos;s story. We see more of the execution.</h2>
				<div className='ed-lede flex max-w-[44rem] flex-col gap-4 text-ed-graphite'>
					<p className='m-0'>
						A model request records what the agent asked for. A screenshot records one frame of the page. Training on either alone optimizes against partial evidence.
					</p>
					<p className='m-0'>
						WootzApp moves the observation point <strong className='text-ed-ink'>beneath the agent</strong> and{" "}
						<strong className='text-ed-ink'>inside the browser</strong>.
					</p>
				</div>
			</div>
			<div className='mt-16 flex flex-col gap-20 border-t border-ed-ink pt-16 lg:mt-24 lg:gap-28 lg:pt-20'>
				<Hypervisor />
				<div className='border-t border-ed-rule pt-16 lg:pt-20'>
					<BrowserEvidence />
				</div>
			</div>
		</Section>
	);
}

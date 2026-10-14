import React from "react";
import Link from "@docusaurus/Link";
import CtaLink from "../editorial/cta-link";
import Eyebrow from "../editorial/eyebrow";
import EvidenceBars from "../editorial/evidence-bars";
import Specimen from "../editorial/specimen";
import {links, study, taskTwo, taskResultsUrl} from "@site/src/data/research";

export default function Hero() {
	return (
		<section className='bg-ed-canvas text-ed-ink'>
			<div className='ed-container pb-16 pt-12 sm:pt-16 lg:pb-20 lg:pt-24'>
				<div className='grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)] lg:gap-16'>
					<div className='flex flex-col gap-8'>
						<Eyebrow>WootzApp / Below the harness. Inside the browser.</Eyebrow>
						<h1 className='ed-display m-0'>Optimize what others can&apos;t see.</h1>
						<p className='ed-h3 m-0 max-w-[34rem] text-ed-graphite'>Bring your production harness. Change almost nothing.</p>
						<div className='ed-lede flex max-w-[40rem] flex-col gap-4 text-ed-graphite'>
							<p className='m-0'>
								We build <strong className='font-semibold text-ed-ink'>RL environments for frontier model labs</strong> and train{" "}
								<strong className='font-semibold text-ed-ink'>custom small models for enterprises</strong> from evidence captured at two
								observation points we built. An OpenShell-based hypervisor watches execution below the harness. W8, our own Chromium browser,
								records the page state screenshots miss.
							</p>
							<p className='m-0 font-semibold text-ed-ink'>Your agent doesn&apos;t need to change. Your visibility does.</p>
						</div>
						<div className='flex flex-col gap-4'>
							<div className='flex flex-col gap-3 sm:flex-row'>
								<CtaLink href='#model-labs'>RL environments for model labs</CtaLink>
								<CtaLink href='#enterprise' variant='secondary'>
									Custom models for enterprises
								</CtaLink>
							</div>
							<CtaLink href='/research' variant='text' className='w-fit'>
								Read the published benchmark
							</CtaLink>
						</div>
					</div>

					<aside className='flex flex-col self-start border border-ed-rule bg-ed-surface lg:mt-2'>
						<div className='grid grid-cols-2 border-b border-ed-rule'>
							<p className='ed-eyebrow m-0 border-r border-ed-rule px-4 py-3 text-[0.75rem] text-ed-ink'>Observe below the harness</p>
							<p className='ed-eyebrow m-0 px-4 py-3 text-[0.75rem] text-ed-ink'>Verify inside the browser</p>
						</div>
						<div className='flex flex-col gap-6 p-5 sm:p-6'>
							<div className='flex flex-col gap-2'>
								<Eyebrow>
									Published research · {study.name} · {study.publishedShort}
								</Eyebrow>
								<p className='m-0 text-[2.75rem] font-medium leading-[1.05] tracking-[-0.01em]'>{study.reduction}</p>
								<p className='m-0 text-[0.9375rem] leading-snug text-ed-graphite'>fewer recorded evidence gaps than screenshot recordings.</p>
							</div>
							<EvidenceBars
								max={5}
								ticks={[0, 1, 2, 3, 4, 5]}
								unit='%'
								rows={[
									{label: "Screenshots", value: study.screenshotRateValue, display: study.screenshotRate},
									{label: "W8 DOM-diff Optimized", value: study.domRateValue, display: study.domRate, accent: true},
								]}
								caption='Criteria with asymmetric source-evidence loss. Lower is better.'
							/>
							<div className='grid grid-cols-2 border-t border-ed-rule pt-4'>
								<div>
									<p className='m-0 text-2xl font-medium tracking-[-0.01em]'>{study.tasks}</p>
									<p className='ed-eyebrow m-0 text-[0.75rem] text-ed-smoke'>Tasks</p>
								</div>
								<div>
									<p className='m-0 text-2xl font-medium tracking-[-0.01em]'>{study.criteria}</p>
									<p className='ed-eyebrow m-0 text-[0.75rem] text-ed-smoke'>Criteria</p>
								</div>
							</div>
							<Link to='/research' className='ed-link w-fit text-[0.875rem]'>
								Method and limitations →
							</Link>
						</div>
					</aside>
				</div>

				<div className='mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:mt-20'>
					<Specimen
						className='ed-fade-in'
						title='runtime / event stream'
						label='Illustrative event format'
						kind='illustrative'
						footer='Evidence scope is configured per sandbox policy.'
					>
						<pre className='m-0 whitespace-pre bg-transparent p-0 font-[inherit] text-[inherit]'>
							{`model.request     route=gateway  status=200
proxy.decision    dest=api.example.com  ALLOW
workspace.write   /sandbox/work/src/app.ts
egress.attempt    dest=203.0.113.9:443  DENY
policy.event      binary=/usr/bin/curl  blocked`}
							<span className='ed-cursor' />
						</pre>
					</Specimen>
					<Specimen
						className='ed-fade-in ed-fade-in--late'
						title={`browser / dom_model10.txt`}
						label={`Recorded benchmark excerpt · Task ${taskTwo.id}`}
						kind='recorded'
						footer={
							<a href={taskResultsUrl(taskTwo.id, taskTwo.title)} target='_blank' rel='noopener noreferrer' className='ed-link'>
								View the Task {taskTwo.id} evidence audit ↗
							</a>
						}
					>
						<ul className='m-0 flex list-none flex-col gap-1 p-0'>
							{taskTwo.dom.map((line) => (
								<li key={line} className='ed-mark w-fit text-ed-ink'>
									{line}
								</li>
							))}
						</ul>
						<p className='m-0 mt-3 text-[0.75rem] text-ed-smoke'>Both values were absent from the screenshot record of the same run.</p>
					</Specimen>
				</div>
			</div>
		</section>
	);
}

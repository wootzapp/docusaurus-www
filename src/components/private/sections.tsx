import React from "react";
import Section from "../editorial/section";
import Eyebrow from "../editorial/eyebrow";
import CtaLink from "../editorial/cta-link";
import Accordion from "../editorial/accordion";
import RowList from "../editorial/row-list";

const partnerMail = "mailto:founders@wootzapp.com?subject=Private%20data%20collaboration";

const heroSignals = [
	"New revenue from dormant systems",
	"Non-exclusive licensing",
	"You keep source and IP",
	"W8-RL handoff with notes",
];

const indiaCities = ["Delhi", "Bengaluru", "Pune", "Hyderabad", "Chennai"];

const indiaProofStats = [
	{
		value: "US$283B -> US$350B",
		label: "India tech sector",
		copy: "Sector size, FY25 to projected FY26. India is a major software market in its own right.",
	},
	{
		value: "5.8M professionals",
		label: "Engineering depth",
		copy: "India supplies 28% of global STEM talent and 23% of the world’s software engineers.",
	},
	{
		value: "4.3% of world services exports",
		label: "Global services weight",
		copy: "India ranks second in the world for exports of telecom, computer, and information services.",
	},
	{
		value: "1,800+ GCCs",
		label: "Enterprise density",
		copy: "India’s GCCs (global capability centers) employ 1.9 million people. Forecasts put them at US$110B by 2030.",
	},
];

const thesisItems = [
	{
		label: "Assess",
		title: "We scope the asset and the intended AI use.",
		copy: "We work with your team to learn the code, the workflow, what is private, how setup works, and what the model will do. Then we package.",
	},
	{
		label: "Engineer",
		title: "We preserve the signal and constrain what should not move.",
		copy: "W8 cleans risky fields, captures approved browser evidence, builds tasks and rewards, and turns the system into a W8-RL environment that replays.",
	},
	{
		label: "Document",
		title: "Each handoff comes with an evidence pack.",
		copy: "It ships with notes: what we kept, what we removed, what replays, how rewards are scored, and why the asset is safe to use.",
	},
];

const fdrlRows = [
	{
		label: "Source",
		copy: "Find code, admin workflows, ERP systems, fintech flows, or ops data with useful training signal.",
	},
	{
		label: "Assess",
		copy: "Map the data owners, the private parts, access limits, setup effort, and the intended use before we commit to a package.",
	},
	{
		label: "Engineer",
		copy: "Clean what must stay home, keep the useful behavior, capture browser evidence, and build tasks, rubrics, process rewards, and outcome labels.",
	},
	{
		label: "Deliver",
		copy: "Ship a W8-RL environment with its notes: what we kept, what we redacted, how the grader works, the reward traces, and the rollout assumptions.",
	},
	{
		label: "Re-assess",
		copy: "When the system, the buyer, or the permitted use changes, we update the package so the notes and the files stay current.",
	},
];

const fitGroups = [
	{
		title: "Good fit assets",
		items: [
			"Private code, admin systems, and workflows with real business logic",
			"ERP, fintech, card-stack, IT-services, claims, or business ops flows",
			"Systems whose real work is missing from public code",
		],
	},
	{
		title: "What helps the cleanup",
		items: [
			"Clear data owners and approval paths",
			"Test accounts, synthetic tenants, or staging data",
			"A list of fields, screens, and records that must never leave",
		],
	},
	{
		title: "What we can work around",
		items: [
			"Swapped databases, secrets, and outside services",
			"On-prem, VPC, or managed setups that limit data movement",
			"Legacy systems that need packaging first",
		],
	},
];

const commercialRows = [
	{
		label: "You keep ownership",
		copy: "The license is non-exclusive in most cases. You keep the source system, data, IP, customers, and commercial rights.",
	},
	{
		label: "We create the asset layer",
		copy: "W8-RL creates the asset layer: cleaned snapshots, task definitions, rubrics, reward traces, browser evidence, and environment files.",
	},
	{
		label: "You approve what moves",
		copy: "We scope private fields, source archives, customer records, and rollout assumptions before handoff. The handoff moves only what we scoped.",
	},
	{
		label: "Why FDRLs matter",
		copy: "Being on site lets us learn enough of the system to keep the training value, with the commercial and privacy terms clear.",
	},
];

const faqs = [
	{
		question: "Do you need exclusive rights?",
		answer: "No. A non-exclusive license is the right structure in most cases. You keep ownership and keep using the system, data, and IP as your business needs.",
	},
	{
		question: "Are you reselling raw data or source code?",
		answer: "No. We build privacy-reviewed environments, rewards, and training files on top of private workflows.",
	},
	{
		question: "What leaves the enterprise boundary?",
		answer: "Only the files agreed in the asset design: reviewed snapshots, task specs, rubrics, reward traces, notes, or packaged environments. Private fields can be redacted, limited, or kept inside a controlled rollout.",
	},
	{
		question: "How is sensitive data protected?",
		answer: "FDRLs map the private surfaces first. They define what we can capture, remove or limit risky fields, and write down each decision next to the package. The goal is cleanup that keeps the signal.",
	},
	{
		question: "What kinds of companies do you work with?",
		answer: "Indian IT services firms, IT providers to banks and insurers, card stack firms, ERP firms, and software firms. We have people in Delhi, Bengaluru, Pune, Hyderabad, and Chennai.",
	},
	{
		question: "How do you think about pricing?",
		answer: "Pricing depends on the asset, the workflow, the setup, the privacy limits, and the grader design. It also depends on whether the engagement is a pilot or a standing program.",
	},
	{
		question: "What makes a workflow useful?",
		answer: "Useful assets have real decisions and outcomes that matter. They have setup complexity. And they have enough evidence to score process and outcome apart.",
	},
];

const qualificationChecklist = [
	"What the code, dataset, or workflow does",
	"Why it is hard, mature, or real",
	"Which screens, fields, records, or documents hold private data",
	"Whether you have test accounts, synthetic tenants, or staging data",
	"Which files can leave your boundary and which must stay",
	"Whether the workflow comes from IT services, ERP, card stack, fintech, or business ops",
	"Where the browser shows process failures and outcome failures",
	"Any tests, logs, audit trails, or docs that help us design the grader",
];

function Dot() {
	return <span aria-hidden='true' className='mt-[0.6em] size-1.5 shrink-0 bg-ed-accent' />;
}

export default function PrivatePageContent() {
	return (
		<main className='ed-page'>
			<section className='bg-ed-canvas text-ed-ink'>
				<div className='ed-container pb-16 pt-12 sm:pt-16 lg:pb-20 lg:pt-24'>
					<div className='grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-16'>
						<div className='flex flex-col gap-7'>
							<Eyebrow>Private Data Collaborations</Eyebrow>
							<h1 className='ed-display m-0'>Turn private enterprise systems into RL assets.</h1>
							<div className='ed-lede flex max-w-[42rem] flex-col gap-4 text-ed-graphite'>
								<p className='m-0'>
									You own codebases, admin tools, ERP flows, fintech systems, or operations data. Coding and computer-use models can learn
									from them. First the asset has to be usable, controlled, and defensible.
								</p>
								<p className='m-0'>
									WootzApp licenses the asset on a non-exclusive basis, turns it into a W8-RL environment, and attaches the notes model teams
									need to trust it. Your IP stays yours. You approve what leaves.
								</p>
							</div>
							<ul className='m-0 flex list-none flex-wrap gap-2 p-0'>
								{heroSignals.map((signal) => (
									<li key={signal} className='ed-mono border border-ed-rule bg-ed-surface px-3 py-1.5 text-[0.75rem] text-ed-graphite'>
										{signal}
									</li>
								))}
							</ul>
							<div className='flex flex-col gap-3 sm:flex-row'>
								<CtaLink href={partnerMail}>Become a data partner</CtaLink>
								<CtaLink href='#qualification' variant='secondary'>
									See the checklist
								</CtaLink>
							</div>
						</div>

						<aside className='flex flex-col gap-5 border border-ed-ink bg-ed-surface p-6 sm:p-7'>
							<Eyebrow className='text-ed-accent-ink'>What you get</Eyebrow>
							<h2 className='ed-h3 m-0'>New revenue from the systems you have built.</h2>
							<div className='flex flex-col gap-4 text-[0.9375rem] leading-relaxed text-ed-graphite'>
								<p className='m-0'>
									Model teams need real private systems. We make yours trainable. We capture the useful behavior, clean the risky parts, and
									package it so it replays.
								</p>
								<p className='m-0'>
									Our FDRLs, forward-deployed RL engineers, work with your team on site. Setup, redactions, grader updates, and approvals
									happen with the people who know the system.
								</p>
								<p className='m-0'>
									You keep the source system and the commercial rights. W8-RL creates the asset layer: something you can license, explain, and
									maintain.
								</p>
							</div>
							<ul className='m-0 flex list-none flex-wrap gap-2 border-t border-ed-rule p-0 pt-5'>
								{indiaCities.map((city) => (
									<li key={city} className='ed-mono border border-ed-rule px-2.5 py-1 text-[0.75rem] text-ed-ink'>
										{city}
									</li>
								))}
							</ul>
							<p className='m-0 text-[0.8125rem] leading-relaxed text-ed-smoke'>
								We are close to the teams in Delhi, Bengaluru, Pune, Hyderabad, and Chennai that own private systems. Model labs cannot get
								those systems from public code.
							</p>
						</aside>
					</div>

					<div className='mt-16 border-t border-ed-ink pt-8 lg:mt-20'>
						<div className='grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-16'>
							<Eyebrow>Why we focus on India</Eyebrow>
							<p className='ed-body m-0 max-w-[48rem] text-ed-graphite'>
								India is where big services firms, GCCs, and private business software overlap. That density is why W8-RL works here. A forward-deployed program keeps the training signal and respects the privacy rules data owners need.
							</p>
						</div>
						<div className='mt-10 grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-4'>
							{indiaProofStats.map((stat) => (
								<article
									key={stat.label}
									className='flex flex-col gap-3 border-t border-ed-rule py-6 sm:pr-6 lg:border-l lg:border-t-0 lg:px-6 lg:py-2 lg:first:border-l-0 lg:first:pl-0'
								>
									<p className='m-0 text-[1.625rem] font-medium leading-[1.2] tracking-[-0.01em]'>{stat.value}</p>
									<p className='ed-eyebrow m-0 text-ed-accent-ink'>{stat.label}</p>
									<p className='m-0 text-[0.9375rem] leading-relaxed text-ed-graphite'>{stat.copy}</p>
								</article>
							))}
						</div>
						<p className='ed-mono m-0 mt-6 text-[0.75rem] text-ed-smoke'>
							Figures from India&apos;s Economic Survey 2024-25 and IBEF 2025 reports.
						</p>
					</div>
				</div>
			</section>

			<Section tone='surface'>
				<div className='grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-16'>
					<div className='flex flex-col gap-6'>
						<Eyebrow>From Private Systems To RL Assets</Eyebrow>
						<h2 className='ed-h2 m-0'>One pipeline: assess, engineer, document, and re-assess.</h2>
						<p className='ed-body m-0 max-w-[40rem] text-ed-graphite'>
							W8-RL turns private systems into RL assets. The pipeline runs from the first assessment, through engineering that keeps the
							signal, to notes that travel with the environment.
						</p>
						<p className='ed-body m-0 max-w-[40rem] text-ed-graphite'>
							When the system, the buyer, or the permitted use changes, we re-assess the asset in place. That keeps private data usable for
							training.
						</p>
						<ol className='m-0 mt-2 flex list-none flex-col border-t border-ed-ink p-0'>
							{thesisItems.map((item, index) => (
								<li key={item.title} className='grid grid-cols-[2.25rem_minmax(0,1fr)] gap-2 border-b border-ed-rule py-5'>
									<span className='ed-mono text-[0.8125rem] text-ed-accent-ink'>0{index + 1}</span>
									<div className='flex flex-col gap-2'>
										<p className='ed-eyebrow m-0 text-ed-smoke'>{item.label}</p>
										<h3 className='m-0 text-xl font-medium tracking-[-0.015em]'>{item.title}</h3>
										<p className='m-0 text-[0.9375rem] leading-relaxed text-ed-graphite'>{item.copy}</p>
									</div>
								</li>
							))}
						</ol>
					</div>
					<RowList title='W8-RL Asset Pipeline' rows={fdrlRows} />
				</div>
			</Section>

			<Section>
				<div className='grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-16'>
					<div className='flex flex-col gap-6'>
						<Eyebrow>Good Fit</Eyebrow>
						<h2 className='ed-h2 m-0'>What makes a private system valuable to model teams.</h2>
						<p className='ed-body m-0 max-w-[40rem] text-ed-graphite'>
							The best assets hold real work: messy setup, business logic, edge cases, integrations, admin flows, and outcomes you cannot
							learn from public code.
						</p>
						<div className='mt-2 flex flex-col border-t border-ed-ink'>
							{fitGroups.map((group) => (
								<article key={group.title} className='grid grid-cols-1 gap-3 border-b border-ed-rule py-5 sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1.6fr)] sm:gap-6'>
									<h3 className='ed-eyebrow m-0 text-ed-ink'>{group.title}</h3>
									<ul className='m-0 flex list-none flex-col gap-2.5 p-0'>
										{group.items.map((item) => (
											<li key={item} className='flex gap-3 text-[0.9375rem] leading-relaxed text-ed-graphite'>
												<Dot />
												<span>{item}</span>
											</li>
										))}
									</ul>
								</article>
							))}
						</div>
					</div>
					<div className='flex flex-col gap-4'>
						<RowList title='Program Shape' rows={commercialRows} />
						<p className='m-0 border-l-2 border-ed-accent pl-4 text-[0.9375rem] leading-relaxed text-ed-graphite'>
							Terms can start as a small pilot or run as a standing program. The constants stay: you keep the IP, the files are clean, the
							notes defend the asset, and the W8-RL environments train.
						</p>
					</div>
				</div>
			</Section>

			<Section id='qualification' tone='surface'>
				<div className='grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16'>
					<div className='flex flex-col gap-6'>
						<Eyebrow>Details</Eyebrow>
						<h2 className='ed-h2 m-0'>What to send first.</h2>
						<p className='ed-body m-0 max-w-[32rem] text-ed-graphite'>
							Keep the first note short and send context only. Source code and sensitive records come later, once scoping starts. We use the note to decide whether to scope the asset.
						</p>
					</div>
					<Accordion
						items={[
							{
								question: "What to send us first",
								answer: (
									<ul className='m-0 flex list-none flex-col gap-3 p-0'>
										{qualificationChecklist.map((item) => (
											<li key={item} className='flex gap-3'>
												<Dot />
												<span>{item}</span>
											</li>
										))}
									</ul>
								),
							},
							...faqs.map((item) => ({question: item.question, answer: <p className='m-0'>{item.answer}</p>})),
						]}
					/>
				</div>
			</Section>

			<section className='bg-ed-ink text-ed-canvas'>
				<div className='ed-container grid grid-cols-1 gap-10 py-20 lg:grid-cols-[minmax(0,1.4fr)_auto] lg:items-end lg:py-28'>
					<div className='flex flex-col gap-6'>
						<Eyebrow className='text-ed-accent'>Private Conversation</Eyebrow>
						<h2 className='ed-h2 m-0 max-w-[52rem]'>If your team owns private systems that can train AI, start with a short note.</h2>
						<p className='ed-lede m-0 max-w-[40rem] text-ed-canvas/80'>
							We start with context: what the system does, why it is real, what must stay private, and who decides.
						</p>
					</div>
					<div className='flex flex-col gap-3 sm:flex-row lg:flex-col'>
						<CtaLink href={partnerMail} variant='inverse'>
							Start a private conversation
						</CtaLink>
						<a href={partnerMail} className='ed-mono text-[0.875rem] text-ed-canvas underline underline-offset-4 hover:text-ed-accent'>
							founders@wootzapp.com
						</a>
					</div>
				</div>
			</section>
		</main>
	);
}

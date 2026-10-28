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
	"Source and IP retained",
	"Documented W8-RL delivery",
];

const indiaCities = ["Delhi", "Bengaluru", "Pune", "Hyderabad", "Chennai"];

const indiaProofStats = [
	{
		value: "US$283B -> US$350B",
		label: "India tech sector",
		copy: "FY25 to projected FY26 sector scale, showing why India is a strategic software market in its own right.",
	},
	{
		value: "5.8M professionals",
		label: "Engineering depth",
		copy: "India contributes 28% of global STEM talent and 23% of the world’s software engineering professionals.",
	},
	{
		value: "4.3% of world services exports",
		label: "Global services weight",
		copy: "India ranks second globally in telecommunication, computer, and information services exports.",
	},
	{
		value: "1,800+ GCCs",
		label: "Enterprise density",
		copy: "India’s GCC base employs 1.9 million professionals and is projected to reach US$110B by 2030.",
	},
];

const thesisItems = [
	{
		label: "Assess",
		title: "We scope the asset and the intended AI use.",
		copy: "We work with your team to understand the codebase, workflow, sensitivity, setup path, and downstream model use case before anything is packaged.",
	},
	{
		label: "Engineer",
		title: "We preserve the signal and constrain what should not move.",
		copy: "W8 sanitizes risky fields, captures approved browser evidence, builds tasks and rewards, and turns the system into a repeatable W8-RL environment.",
	},
	{
		label: "Document",
		title: "Every delivery comes with an evidence package.",
		copy: "The environment ships with what was retained, what was removed, what can be replayed, how rewards are scored, and why the asset is safe to use downstream.",
	},
];

const fdrlRows = [
	{
		label: "Source",
		copy: "Identify candidate codebases, admin workflows, ERP systems, fintech flows, or enterprise operations data that could become useful training signal.",
	},
	{
		label: "Assess",
		copy: "Map data owners, sensitivity, access constraints, setup complexity, and the intended AI use case before committing to an asset package.",
	},
	{
		label: "Engineer",
		copy: "Sanitize what should not travel, preserve useful behavior, capture browser evidence, and build tasks, rubrics, process rewards, and outcome labels.",
	},
	{
		label: "Deliver",
		copy: "Ship a W8-RL environment with documentation attached: retained artifacts, redactions, verifier design, reward traces, and deployment assumptions.",
	},
	{
		label: "Re-assess",
		copy: "When the system, buyer, or permitted use changes, update the asset package so the documentation and environment stay current.",
	},
];

const fitGroups = [
	{
		title: "Good fit assets",
		items: [
			"Private codebases, admin systems, and operational workflows with real business logic",
			"ERP, fintech, card-stack, IT-services, claims, or enterprise operations flows",
			"Systems whose real work is absent from public corpora",
		],
	},
	{
		title: "What helps sanitization",
		items: [
			"Clear data owners and approval paths",
			"Test accounts, synthetic tenants, or controlled staging data",
			"Known fields, screens, records, and artifacts that should never be exported",
		],
	},
	{
		title: "What we can adapt around",
		items: [
			"Swapped databases, secrets, and infrastructure dependencies",
			"On-prem, VPC, or managed workflows with constrained data movement",
			"Legacy systems that need packaging before they become trainable",
		],
	},
];

const commercialRows = [
	{
		label: "You keep ownership",
		copy: "The structure is usually non-exclusive. You retain the source system, data, IP, customers, and existing commercial rights.",
	},
	{
		label: "We create the asset layer",
		copy: "W8-RL creates the AI-ready layer: sanitized snapshots, task definitions, rubrics, reward traces, browser evidence, and environment artifacts.",
	},
	{
		label: "You approve what moves",
		copy: "Sensitive fields, source archives, customer records, and deployment assumptions are scoped before delivery. Delivery moves only the scoped artifacts.",
	},
	{
		label: "Why FDRLs matter",
		copy: "On-ground deployment lets us understand enough of the system to preserve training utility while keeping the commercial and privacy posture clear.",
	},
];

const faqs = [
	{
		question: "Do you need exclusive rights?",
		answer: "No. Non-exclusive licensing is usually the right structure. You keep ownership and can continue to use the system, data, and IP however your business requires.",
	},
	{
		question: "Are you reselling raw data or source code?",
		answer: "No. We build privacy-reviewed environments, reward structures, and training artifacts on top of private workflows. ",
	},
	{
		question: "What leaves the enterprise boundary?",
		answer: "Only the artifacts agreed in the asset design: reviewed snapshots, task specs, rubrics, reward traces, documentation, or packaged environments. Sensitive fields can be redacted, constrained, or kept inside a controlled deployment.",
	},
	{
		question: "How is sensitive data protected?",
		answer: "FDRLs map sensitive surfaces first, define what can be captured, remove or constrain risky fields, and document the decisions attached to each environment. The goal is signal-preserving sanitization.",
	},
	{
		question: "What kinds of companies do you work with?",
		answer: "We work with Indian IT services companies, financial services IT providers, card stack companies, ERP companies, and enterprise software companies, with presence in Delhi, Bengaluru, Pune, Hyderabad, and Chennai.",
	},
	{
		question: "How do you think about pricing?",
		answer: "Pricing depends on asset quality, workflow complexity, setup maturity, privacy constraints, verifier design, and whether the engagement is a focused pilot or a standing program.",
	},
	{
		question: "What makes a workflow especially useful?",
		answer: "Useful assets have real decisions, meaningful user outcomes, setup complexity, and enough evidence to score process and outcome separately.",
	},
];

const qualificationChecklist = [
	"What the codebase, dataset, or workflow does",
	"Why it is hard, mature, or commercially realistic",
	"Which screens, fields, records, or documents contain sensitive data",
	"Whether test accounts, synthetic tenants, or staging data are available",
	"Which artifacts can leave the enterprise boundary and which must stay inside",
	"Whether the workflow comes from IT services, ERP, card stack, fintech, or enterprise operations",
	"Where process failures and outcome failures can be observed in the browser",
	"Any existing tests, logs, audit trails, or documentation that can support verifier design",
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
							<h1 className='ed-display m-0'>Turn private enterprise systems into AI-ready RL assets.</h1>
							<div className='ed-lede flex max-w-[42rem] flex-col gap-4 text-ed-graphite'>
								<p className='m-0'>
									You sit on codebases, admin tools, ERP flows, fintech systems, or operations data that could power coding and computer-use
									models. It just has to be usable, controlled, and defensible first.
								</p>
								<p className='m-0'>
									WootzApp licenses that asset non-exclusively, engineers it into a W8-RL environment, and attaches the documentation model teams
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
									See qualification checklist
								</CtaLink>
							</div>
						</div>

						<aside className='flex flex-col gap-5 border border-ed-ink bg-ed-surface p-6 sm:p-7'>
							<Eyebrow className='text-ed-accent-ink'>What you get</Eyebrow>
							<h2 className='ed-h3 m-0'>A new revenue stream from systems your team already built.</h2>
							<div className='flex flex-col gap-4 text-[0.9375rem] leading-relaxed text-ed-graphite'>
								<p className='m-0'>
									Model teams need realistic private systems. We make those systems trainable by capturing the useful behavior,
									sanitizing risky surfaces, and packaging replayable environments.
								</p>
								<p className='m-0'>
									Our FDRLs work with your team on the ground so setup, redactions, verifier updates, and artifact approvals happen with the
									people who actually understand the system.
								</p>
								<p className='m-0'>
									You keep the source system and commercial rights. W8-RL creates the AI-ready asset layer that can be licensed, explained, and
									maintained.
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
								Delhi, Bengaluru, Pune, Hyderabad, and Chennai give us proximity to the teams that own the private enterprise systems model labs
								cannot get from public corpora.
							</p>
						</aside>
					</div>

					<div className='mt-16 border-t border-ed-ink pt-8 lg:mt-20'>
						<div className='grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-16'>
							<Eyebrow>Why We Specialize In India</Eyebrow>
							<p className='ed-body m-0 max-w-[48rem] text-ed-graphite'>
								India is where large-scale services delivery, GCC infrastructure, and private enterprise software overlap. That density is why W8-RL specializes here: a forward-deployed program preserves training signal and respects the privacy posture that enterprise data owners need.
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
							Selected benchmarks from India&apos;s Economic Survey 2024-25 and IBEF 2025 reporting.
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
							W8-RL turns private systems into AI-ready assets for RL. The pipeline covers the full lifecycle: from initial asset assessment
							through signal-preserving engineering to documentation that travels with the environment.
						</p>
						<p className='ed-body m-0 max-w-[40rem] text-ed-graphite'>
							When the system, recipient, or permitted use changes, the asset is re-assessed in place. That keeps private enterprise data practical for model training.
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
							The best assets contain real work: messy setup, business logic, edge cases, integrations, admin flows, and outcomes that cannot be
							learned from public code alone.
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
							Commercial terms can start as a focused pilot or become a standing program. The constant is the same: retained IP, sanitized
							artifacts, defensibility documentation, and W8-RL environments that model teams can actually train on.
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
						<h2 className='ed-h2 m-0 max-w-[52rem]'>If your team is sitting on private systems that could power AI, start with a short note.</h2>
						<p className='ed-lede m-0 max-w-[40rem] text-ed-canvas/80'>
							We begin with context: what the system does, why it is realistic, what must stay private, and who owns the
							decision.
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

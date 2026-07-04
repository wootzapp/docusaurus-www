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
			"Systems where public corpora do not capture the actual work",
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
		copy: "Sensitive fields, source archives, customer records, and deployment assumptions are scoped before delivery. Nothing depends on broad extraction.",
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
		answer: "No. We build privacy-reviewed environments, reward structures, and training artifacts on top of private workflows. We are not packaging up and reselling source archives or sensitive records.",
	},
	{
		question: "What leaves the enterprise boundary?",
		answer: "Only the artifacts agreed in the asset design: reviewed snapshots, task specs, rubrics, reward traces, documentation, or packaged environments. Sensitive fields can be redacted, constrained, or kept inside a controlled deployment.",
	},
	{
		question: "How is sensitive data protected?",
		answer: "FDRLs map sensitive surfaces first, define what can be captured, remove or constrain risky fields, and document the decisions attached to each environment. The goal is signal-preserving sanitization, not broad extraction.",
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

export default function PrivatePageContent() {
	return (
		<div className='private-page -mt-[64px] flex flex-col'>
			<section className='private-band private-band--dark sci-grid relative overflow-hidden bg-brand-base text-brand-text-primary'>
				<div className='absolute inset-0 sci-scanlines pointer-events-none' />
				<div className='hero-aurora pointer-events-none' />
				<div className='hero-aurora hero-aurora--two pointer-events-none' />
				<div className='hero-beam pointer-events-none' />
				<div className='private-hero-gradient pointer-events-none' />
				<div className='absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-accent-100/40 to-transparent' />
				<div className='absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-accent-200/25 to-transparent' />

				<div className='container-custom relative z-10 py-[76px] lg:py-[108px]'>
					<div className='grid items-start gap-8 lg:grid-cols-[minmax(0,1.18fr)_minmax(300px,0.82fr)] lg:gap-8 xl:gap-10'>
						<div className='max-w-4xl flex flex-col gap-5'>
							<span className='private-section-tag private-section-tag--dark'>Private Data Collaborations</span>
							<h1 className='private-display text-brand-text-primary'>
								Turn private enterprise systems into AI-ready RL assets.
							</h1>
							<p className='private-body max-w-[44rem] text-brand-text-secondary'>
								You sit on codebases, admin tools, ERP flows, fintech systems, or operations data that could power coding and computer-use models. It just has to be usable, controlled, and defensible first.
							</p>
							<p className='private-body max-w-[44rem] text-brand-text-secondary'>
								WootzApp licenses that asset non-exclusively, engineers it into a W8-RL environment, and attaches the documentation model teams need to trust it. Your IP stays yours. You approve what leaves.
							</p>
							<div className='flex flex-wrap gap-2.5'>
								{heroSignals.map((signal) => (
									<span
										key={signal}
										className='private-signal-chip inline-flex items-center rounded-full'
									>
										{signal}
									</span>
								))}
							</div>
							<div className='flex flex-col gap-3 pt-1 sm:flex-row sm:items-center'>
								<a
									href='mailto:founders@wootzapp.com?subject=Private%20data%20collaboration'
									className='inline-flex items-center justify-center rounded-md border border-brand-accent-200/60 bg-brand-accent-100 px-4 py-2.5 text-[0.88rem] font-mono font-semibold tracking-[0.14em] text-brand-base shadow-[0_12px_35px_-18px_rgba(242,139,50,0.7)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_45px_-18px_rgba(242,139,50,0.85)] hover:text-brand-base hover:no-underline'
								>
									Become a data partner
								</a>
								<a
									href='#qualification'
									className='inline-flex items-center justify-center rounded-md border border-brand-accent-200/35 bg-brand-surface/60 px-4 py-2.5 text-[0.88rem] font-mono font-semibold tracking-[0.14em] text-brand-text-primary transition hover:-translate-y-0.5 hover:border-brand-accent-200/60 hover:bg-brand-surface hover:text-brand-text-primary hover:no-underline'
								>
									See qualification checklist
								</a>
							</div>
						</div>

						<div className='private-note-card private-paper-card xl:justify-self-end'>
							<div className='p-5 sm:p-6'>
								<p className='private-mini-label'>What you get</p>
								<h2 className='private-note-heading mt-3 text-brand-base'>
									A new revenue stream from systems your team already built.
								</h2>
								<div className='mt-4 space-y-4'>
									<p className='private-note-body'>
										Model teams need realistic private systems, not toy repos. We make those systems trainable by capturing the useful behavior, sanitizing risky surfaces, and packaging replayable environments.
									</p>
									<p className='private-note-body'>
										Our FDRLs work with your team on the ground so setup, redactions, verifier updates, and artifact approvals happen with the people who actually understand the system.
									</p>
									<p className='private-note-body'>
										You keep the source system and commercial rights. W8-RL creates the AI-ready asset layer that can be licensed, explained, and maintained.
									</p>
								</div>
								<div className='mt-5 flex flex-wrap gap-2'>
									{indiaCities.map((city) => (
										<span key={city} className='private-note-chip'>
											{city}
										</span>
									))}
								</div>
								<p className='private-note-caption mt-5'>
									Delhi, Bengaluru, Pune, Hyderabad, and Chennai give us proximity to the teams that own the private enterprise systems model labs cannot get from public corpora.
								</p>
							</div>
						</div>
					</div>

					<div className='private-proof-strip mt-8 lg:mt-10'>
						<div className='flex flex-col gap-3 lg:max-w-4xl'>
							<p className='private-proof-kicker'>Why We Specialize In India</p>
							<p className='private-body text-brand-text-secondary'>
								India is where large-scale services delivery, GCC infrastructure, and private enterprise software overlap. That density is why W8-RL specializes here: the right forward-deployed program can preserve training signal while respecting the privacy posture that enterprise data owners need.
							</p>
						</div>
						<div className='private-proof-grid mt-5'>
							{indiaProofStats.map((stat) => (
								<article key={stat.label} className='private-proof-card'>
									<p className='private-proof-value'>{stat.value}</p>
									<p className='private-proof-label'>{stat.label}</p>
									<p className='private-proof-copy'>{stat.copy}</p>
								</article>
							))}
						</div>
						<p className='private-proof-caption mt-4'>
							Selected benchmarks from India&apos;s Economic Survey 2024-25 and IBEF 2025 reporting.
						</p>
					</div>
				</div>
			</section>

			<section className='private-band private-band--light sci-grid relative overflow-hidden bg-brand-neutral-100 text-brand-base'>
				<div className='absolute inset-0 sci-scanlines sci-scanlines--soft pointer-events-none' />
				<div className='container-custom relative z-10 py-[60px] lg:py-[84px]'>
					<div className='grid items-start gap-7 lg:grid-cols-[minmax(0,1.06fr)_minmax(320px,0.94fr)] lg:gap-8'>
						<div className='flex flex-col gap-[1.125rem]'>
							<span className='private-section-tag private-section-tag--light'>From Private Systems To RL Assets</span>
							<h2 className='private-heading text-brand-base'>
								One pipeline: assess, engineer, document, and re-assess.
							</h2>
							<p className='private-body max-w-3xl text-brand-base/85'>
								W8-RL turns private systems into AI-ready assets for RL. The pipeline covers the full lifecycle: from initial asset assessment through signal-preserving engineering to documentation that travels with the environment.
							</p>
							<p className='private-body max-w-3xl text-brand-base/78'>
								When the system, recipient, or permitted use changes, the asset can be re-assessed instead of starting over. That is what makes private enterprise data practical for model training.
							</p>
							<div className='private-paper-card private-thesis-card p-5 sm:p-6'>
								<div className='space-y-1'>
									{thesisItems.map((item, index) => (
										<article key={item.title} className='private-thesis-item'>
											<div className='private-thesis-index'>{index + 1}</div>
											<div className='min-w-0'>
												<p className='private-mini-label'>{item.label}</p>
												<h3 className='private-subheading mt-2 text-brand-base'>{item.title}</h3>
												<p className='private-body-compact mt-3 text-brand-base/82'>{item.copy}</p>
											</div>
										</article>
									))}
								</div>
							</div>
						</div>

						<div className='terminal-window glow-box lg:mt-2'>
							<div className='terminal-header justify-start'>
								<span className='terminal-title'>W8-RL Asset Pipeline</span>
							</div>
							<div className='terminal-body flex flex-col gap-4 p-5 sm:p-6 text-brand-text-secondary'>
								{fdrlRows.map((row, index) => (
									<div key={row.label}>
										<p className='terminal-prompt text-[0.76rem] uppercase tracking-[0.15em]'>$ {row.label}</p>
										<p className='private-body-compact mt-2'>{row.copy}</p>
										{index < fdrlRows.length - 1 ? <div className='terminal-divider mt-4' /> : null}
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className='private-band private-band--dark sci-grid relative overflow-hidden bg-brand-base text-brand-text-primary'>
				<div className='absolute inset-0 sci-scanlines sci-scanlines--strong pointer-events-none' />
				<div className='container-custom relative z-10 py-[60px] lg:py-[84px]'>
					<div className='grid items-start gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)] lg:gap-9'>
						<div className='flex flex-col gap-5'>
							<span className='private-section-tag private-section-tag--dark'>Good Fit</span>
							<h2 className='private-heading text-brand-text-primary'>
								What makes a private system valuable to model teams.
							</h2>
							<p className='private-body max-w-3xl text-brand-text-secondary'>
								The best assets contain real work: messy setup, business logic, edge cases, integrations, admin flows, and outcomes that cannot be learned from public code alone.
							</p>
							<div className='private-dark-card private-fit-board p-5 sm:p-6'>
								{fitGroups.map((group) => (
									<article key={group.title} className='private-fit-row'>
										<h3 className='private-fit-heading'>
											{group.title}
										</h3>
										<ul className='private-fit-list'>
											{group.items.map((item) => (
												<li key={item} className='private-fit-item'>
													<span className='private-fit-dot' />
													<span className='private-body-compact text-brand-text-secondary'>{item}</span>
												</li>
											))}
										</ul>
									</article>
								))}
							</div>
						</div>

						<div className='terminal-window glow-box xl:mt-2'>
							<div className='terminal-header justify-start'>
								<span className='terminal-title'>Program Shape</span>
							</div>
							<div className='terminal-body flex flex-col gap-4 p-5 sm:p-6 text-brand-text-secondary'>
								{commercialRows.map((row, index) => (
									<div key={row.label}>
										<p className='terminal-prompt text-[0.76rem] uppercase tracking-[0.15em]'>$ {row.label}</p>
										<p className='private-body-compact mt-2'>{row.copy}</p>
										{index < commercialRows.length - 1 ? <div className='terminal-divider mt-4' /> : null}
									</div>
								))}
								<p className='private-terminal-note private-body-compact'>
									Commercial terms can start as a focused pilot or become a standing program. The constant is the same: retained IP, sanitized artifacts, defensibility documentation, and W8-RL environments that model teams can actually train on.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section
				className='private-band private-band--light sci-grid relative overflow-hidden bg-brand-neutral-100 text-brand-base'
				id='qualification'
			>
				<div className='absolute inset-0 sci-scanlines sci-scanlines--soft pointer-events-none' />
				<div className='container-custom relative z-10 py-[60px] lg:py-[84px]'>
					<div className='grid items-start gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]'>
						<div className='flex flex-col gap-5'>
							<span className='private-section-tag private-section-tag--light'>Details</span>
							<h2 className='private-heading text-brand-base'>
								What to send first.
							</h2>
							<p className='private-body max-w-2xl text-brand-base/80'>
								Keep the first note short. Do not send source code or sensitive records upfront. Send enough context for us to decide whether the asset is worth scoping.
							</p>
						</div>

						<div className='grid gap-4'>
							<details className='private-paper-card private-accordion'>
								<summary className='private-accordion-summary'>
									<span className='private-accordion-title'>What to send us first</span>
									<span className='private-accordion-icon' aria-hidden='true' />
								</summary>
								<div className='private-accordion-body'>
									<ul className='flex flex-col gap-3.5 text-brand-base/85'>
										{qualificationChecklist.map((item) => (
											<li key={item} className='flex items-start gap-3'>
												<span className='private-fit-dot mt-2' />
												<span className='private-body'>{item}</span>
											</li>
										))}
									</ul>
								</div>
							</details>
							{faqs.map((item) => (
								<details key={item.question} className='private-paper-card private-accordion'>
									<summary className='private-accordion-summary'>
										<span className='private-accordion-title'>{item.question}</span>
										<span className='private-accordion-icon' aria-hidden='true' />
									</summary>
									<div className='private-accordion-body'>
										<p className='private-body-compact text-brand-base/80'>{item.answer}</p>
									</div>
								</details>
							))}
						</div>
					</div>

					<div className='private-cta-strip mt-8 grid gap-5 p-5 sm:p-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center'>
						<div className='flex flex-col gap-4'>
							<span className='private-section-tag private-section-tag--dark'>Private Conversation</span>
							<h2 className='private-subheading text-brand-text-primary'>
								If your team is sitting on private systems that could power AI, start with a short note.
							</h2>
							<p className='private-body text-brand-text-secondary'>
								We can begin with context, not paperwork: what the system does, why it is realistic, what must stay private, and who owns the decision.
							</p>
						</div>
						<div className='flex flex-col gap-3 sm:flex-row lg:justify-end'>
							<a
								className='inline-flex items-center justify-center rounded-md border border-brand-accent-200/60 bg-brand-accent-100 px-5 py-2.5 text-[0.88rem] font-mono font-semibold tracking-[0.14em] text-brand-base shadow-[0_12px_35px_-18px_rgba(242,139,50,0.7)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_45px_-18px_rgba(242,139,50,0.85)] hover:text-brand-base hover:no-underline'
								href='mailto:founders@wootzapp.com?subject=Private%20data%20collaboration'
							>
								founders@wootzapp.com
							</a>
							<a
								className='inline-flex items-center justify-center rounded-md border border-brand-accent-200/35 bg-brand-surface/60 px-5 py-2.5 text-[0.88rem] font-mono font-semibold tracking-[0.14em] text-brand-text-primary transition hover:-translate-y-0.5 hover:border-brand-accent-200/60 hover:bg-brand-surface hover:text-brand-text-primary hover:no-underline'
								href='mailto:founders@wootzapp.com?subject=Private%20data%20collaboration'
							>
								Start a private conversation
							</a>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

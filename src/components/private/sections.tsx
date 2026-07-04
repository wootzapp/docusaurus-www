const heroSignals = [
	"AI-ready RL assets",
	"Signal-preserving sanitization",
	"Browser evidence packages",
	"Non-exclusive licensing",
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
		label: "Asset creation",
		title: "Private systems become AI-ready RL assets.",
		copy: "We license private codebases and enterprise workflows, then package the useful behavior into W8-RL environments for coding and computer-use models.",
	},
	{
		label: "Sanitization",
		title: "Signal is preserved while risky surfaces are constrained.",
		copy: "W8 maps what can be captured, redacted, retained, or kept inside a controlled deployment so the output is useful without becoming an uncontrolled raw-data transfer.",
	},
	{
		label: "Verification",
		title: "The browser provides the evidence a verifier needs.",
		copy: "Screenshots, DOM state, actions, and outcomes support process rewards and outcome labels, so model teams can train against behavior that actually happened.",
	},
];

const fdrlRows = [
	{
		label: "Align on scope and standards",
		copy: "We identify the systems, workflows, model use cases, privacy constraints, and buyer requirements before any environment is packaged.",
	},
	{
		label: "Map and sanitize the useful signal",
		copy: "FDRLs find where sensitive data appears, what evidence can be captured, which fields must be removed, and which artifacts can leave the enterprise boundary.",
	},
	{
		label: "Package verifier-ready environments",
		copy: "W8-RL turns approved code, workflow state, browser evidence, task specs, and rubrics into repeatable environments with process and outcome rewards.",
	},
	{
		label: "Document and re-assess",
		copy: "As systems, recipients, and requirements change, the program updates the artifact policy, verifier design, and documentation attached to each environment.",
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
		label: "Access model",
		copy: "Usually non-exclusive. You retain ownership of the source system, data, and IP while W8-RL creates an AI-ready environment layer.",
	},
	{
		label: "What can leave",
		copy: "The output is a reviewed package: snapshots, task definitions, rubrics, reward traces, privacy decisions, and environment artifacts, not an uncontrolled dump of source archives or sensitive records.",
	},
	{
		label: "What FDRLs make possible",
		copy: "On-ground deployment lets us understand the data and workflow deeply enough to preserve signal while removing or constraining what should not travel.",
	},
	{
		label: "Pricing drivers",
		copy: "Workflow complexity, privacy review scope, setup maturity, verifier design, and how much environment packaging is required.",
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
		answer: "Only the artifacts agreed in the program design: reviewed snapshots, task specs, rubrics, reward traces, documentation, or packaged environments. Sensitive fields can be redacted, constrained, or kept inside a controlled deployment.",
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
		answer: "Pricing depends on workflow complexity, privacy constraints, setup maturity, verifier design, and whether the engagement is a focused pilot or a standing program.",
	},
	{
		question: "What makes a workflow especially useful?",
		answer: "Useful assets have real decisions, meaningful user outcomes, setup complexity, and enough evidence to score process and outcome separately.",
	},
];

const qualificationChecklist = [
	"Codebase or workflow summary and what the user is trying to accomplish",
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
								Turn real-world enterprise data into AI-ready RL assets that stay defensible.
							</h1>
							<p className='private-body max-w-[44rem] text-brand-text-secondary'>
								WootzApp non-exclusively licenses private codebases and workflows, sanitizes what should not travel, and packages useful behavior into W8-RL environments for coding and computer-use models.
							</p>
							<p className='private-body max-w-[44rem] text-brand-text-secondary'>
								Your IP stays yours. Model teams get verified training signal. Our browser captures the evidence a verifier needs while W8 controls what leaves the enterprise boundary.
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
									href='mailto:founders@wootzapp.com'
									className='inline-flex items-center justify-center rounded-md border border-brand-accent-200/60 bg-brand-accent-100 px-4 py-2.5 text-[0.88rem] font-mono font-semibold tracking-[0.14em] text-brand-base shadow-[0_12px_35px_-18px_rgba(242,139,50,0.7)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_45px_-18px_rgba(242,139,50,0.85)] hover:text-brand-base hover:no-underline'
								>
									Email founders@wootzapp.com
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
									A practical way to turn unused private systems into licensed RL assets.
								</h2>
								<div className='mt-4 space-y-4'>
									<p className='private-note-body'>
										Private systems become valuable to model teams when the signal is captured, sanitized, documented, and packaged into an environment that can be replayed and scored.
									</p>
									<p className='private-note-body'>
										Our FDRLs work with your team on the ground so boundary decisions, redactions, verifier updates, and artifact approvals happen inside the operating rhythm.
									</p>
									<p className='private-note-body'>
										We have presence in Delhi, Bengaluru, Pune, Hyderabad, and Chennai, giving us proximity to the IT services, financial software, ERP, and enterprise operations teams that own this private signal.
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
									That local presence is what makes private enterprise systems practical as defensible RL assets, not just interesting source material.
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
								W8-RL turns licensed private systems into trainable environments.
							</h2>
							<p className='private-body max-w-3xl text-brand-base/85'>
								The platform assesses what is useful, sanitizes what is sensitive, captures the browser evidence a verifier needs, and delivers environment artifacts that model teams can train against.
							</p>
							<p className='private-body max-w-3xl text-brand-base/78'>
								The forward-deployed team is the operating model for that pipeline. The same FDRLs learn the codebase, workflow, privacy constraints, verifier design, and downstream requirements so the environment stays defensible as context changes.
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
								What makes a private system worth turning into an RL asset.
							</h2>
							<p className='private-body max-w-3xl text-brand-text-secondary'>
								The goal is not broad source access or broad data extraction. The goal is a controlled package that preserves enough behavior, context, and browser-visible evidence to train and verify agents while keeping sensitive systems defensible.
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
								What to send before we scope the asset.
							</h2>
							<p className='private-body max-w-2xl text-brand-base/80'>
								Keep the first note short. We are looking for system context, sensitive surfaces, and enough evidence to decide whether the codebase or workflow can become a defensible W8-RL environment.
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
								If your team is sitting on private systems that could become AI-ready RL assets, we&apos;d be glad to talk.
							</h2>
							<p className='private-body text-brand-text-secondary'>
								A short note is enough to start. We can begin with context, sensitive boundaries, and what W8 would need to sanitize, document, and verify before anything moves.
							</p>
						</div>
						<div className='flex flex-col gap-3 sm:flex-row lg:justify-end'>
							<a
								className='inline-flex items-center justify-center rounded-md border border-brand-accent-200/60 bg-brand-accent-100 px-5 py-2.5 text-[0.88rem] font-mono font-semibold tracking-[0.14em] text-brand-base shadow-[0_12px_35px_-18px_rgba(242,139,50,0.7)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_45px_-18px_rgba(242,139,50,0.85)] hover:text-brand-base hover:no-underline'
								href='mailto:founders@wootzapp.com'
							>
								founders@wootzapp.com
							</a>
							<a
								className='inline-flex items-center justify-center rounded-md border border-brand-accent-200/35 bg-brand-surface/60 px-5 py-2.5 text-[0.88rem] font-mono font-semibold tracking-[0.14em] text-brand-text-primary transition hover:-translate-y-0.5 hover:border-brand-accent-200/60 hover:bg-brand-surface hover:text-brand-text-primary hover:no-underline'
								href='mailto:founders@wootzapp.com'
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

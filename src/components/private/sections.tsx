const heroSignals = [
	"Non-exclusive licensing",
	"W8-RL environments",
	"India-scale private code",
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
		label: "Training quality",
		title: "W8-RL gives model teams higher-quality environments.",
		copy: "It packages legacy systems into repeatable environments, runs stable rollouts, and scores browser behavior with dense browser-visible rewards instead of relying on unit tests alone.",
	},
	{
		label: "Operational cost",
		title: "W8-RL makes legacy systems cheaper to operationalize.",
		copy: "Reusable rollout, reward, and evaluation infrastructure lowers one-off environment work and reduces wasted compute on systems that cannot be graded reliably.",
	},
	{
		label: "Commercial fit",
		title: "The model works for Indian IT and enterprise software teams.",
		copy: "Code owners keep their IP through non-exclusive licensing, while W8-RL turns older IT services, ERP, payments, and enterprise workflows into trainable environments.",
	},
];

const fdrlRows = [
	{
		label: "Forward Deployed RL Engineers",
		copy: "Our FDRLs work on ground with counterpart teams to understand workflows, stand up environments, and translate legacy product behavior into RL-ready tasks.",
	},
	{
		label: "What they transform",
		copy: "They turn old, unused, and legacy codebases into richer RL environments with better rollouts, finer-grained rewards, and more realistic browser-visible evaluation.",
	},
	{
		label: "Why model companies care",
		copy: "This is how we reach the private operational systems that do not exist in public source corpora and convert them into usable training substrates.",
	},
	{
		label: "What gets monetized",
		copy: "The company keeps its IP while the legacy codebase becomes monetizable through non-exclusive access for environment creation and training-data generation.",
	},
];

const fitGroups = [
	{
		title: "Good fit systems",
		items: [
			"Private production systems with real business logic",
			"Integrated workflows, not toy repos or tutorials",
			"Older enterprise software with real maintenance history",
		],
	},
	{
		title: "What helps most",
		items: [
			"Good tests or at least reliable verification surfaces",
			"Backend-heavy or full-stack systems with admin flows",
			"Meaningful size, usually around 100k+ lines or equivalent complexity",
		],
	},
	{
		title: "What we can adapt around",
		items: [
			"Swapped databases, secrets, or infrastructure dependencies",
			"Legacy ERP, payments, card-stack, and enterprise IT setups",
			"Codebases that need packaging before they become trainable",
		],
	},
];

const commercialRows = [
	{
		label: "Access model",
		copy: "Usually non-exclusive. You retain ownership and can continue to use the code however you want.",
	},
	{
		label: "What we do with it",
		copy: "We do not package up the repo and sell it raw. We build training environments, reward pipelines, and research artifacts on top of it.",
	},
	{
		label: "What FDRLs add",
		copy: "On-ground deployment lets us understand the legacy workflow well enough to create realistic tasks, dense rewards, and higher-quality rollouts.",
	},
	{
		label: "Pricing drivers",
		copy: "Size, maturity, test quality, integration complexity, and whether the codebase supports realistic environment construction.",
	},
];

const faqs = [
	{
		question: "Do you need exclusive rights?",
		answer: "No. Non-exclusive access is completely acceptable. In many cases that is the preferred structure.",
	},
	{
		question: "Are you reselling the codebase?",
		answer: "No. We use codebases to build environments, reward structures, and training data on top of them. We are not packaging up and reselling the raw repo.",
	},
	{
		question: "What kinds of companies do you work with?",
		answer: "We work with Indian IT services companies, financial services IT providers, card stack companies, ERP companies, and enterprise software companies, with active presence in Delhi, Bengaluru, Pune, Hyderabad, and Chennai.",
	},
	{
		question: "How do you think about pricing?",
		answer: "Typical non-exclusive deals are often around $5k-$25k, with many codebases landing closer to $5k-$10k depending on quality, maturity, and usefulness.",
	},
	{
		question: "What makes a codebase especially useful?",
		answer: "Strong tests, real integration points, realistic setup complexity, and behavior that requires more than a binary verifier to evaluate well.",
	},
];

const qualificationChecklist = [
	"Stack summary and what the system actually does",
	"Approximate lines of real code and backend/frontend split",
	"How good the test coverage is in practice",
	"Whether it can be run independently with infrastructure swapped out",
	"Whether it comes from an IT services, enterprise software, ERP, card stack, or financial-services workflow",
	"Whether there are admin flows, browser-visible workflows, or integration-heavy surfaces",
	"Any reason the codebase is unusual, legacy, private, or particularly well-crafted",
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
							<span className='private-section-tag private-section-tag--dark'>Private Codebase Licensing for W8-RL</span>
							<h1 className='private-display text-brand-text-primary'>
								We license private codebases to build RL environments for coding models.
							</h1>
							<p className='private-body max-w-[44rem] text-brand-text-secondary'>
								If your team is sitting on older internal systems that still carry years of real work, WootzApp helps them find a second life. W8-RL is our proprietary infrastructure for turning private software into repeatable RL environments with better rollouts and dense browser-visible rewards, without asking you to give up the underlying IP.
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
								<p className='private-mini-label'>A note to teams sitting on legacy code</p>
								<h2 className='private-note-heading mt-3 text-brand-base'>
									These systems still carry years of care and know-how.
								</h2>
								<div className='mt-4 space-y-4'>
									<p className='private-note-body'>
										India is not a side market for us. It is one of the densest concentrations of IT services delivery, software talent, GCC infrastructure, and private enterprise workflows anywhere in the world. Even when a system is no longer strategic, it still represents real craft.
									</p>
									<p className='private-note-body'>
										We have presence in Delhi, Bengaluru, Pune, Hyderabad, and Chennai, and our Forward Deployed RL Engineers (FDRL) spend time on ground with teams so the process feels local, respectful, and practical rather than extractive.
									</p>
									<p className='private-note-body'>
										You keep your IP. Our IP is W8-RL: the rollout, reward, and evaluation infrastructure that turns older systems into trainable environments.
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
									That same local presence is what lets W8-RL work with truly private systems that public corpora never touch.
								</p>
							</div>
						</div>
					</div>

					<div className='private-proof-strip mt-8 lg:mt-10'>
						<div className='flex flex-col gap-3 lg:max-w-4xl'>
							<p className='private-proof-kicker'>Why We Specialize In India</p>
							<p className='private-body text-brand-text-secondary'>
								India is where large-scale services delivery, GCC infrastructure, and private enterprise software overlap. That density is why W8-RL specializes here: it gives us access to the kind of legacy workflows and browser-visible operational behavior that public corpora do not contain.
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
							<span className='private-section-tag private-section-tag--light'>Why W8-RL Wins</span>
							<h2 className='private-heading text-brand-base'>
								W8-RL is about quality, cost, and operational fit.
							</h2>
							<p className='private-body max-w-3xl text-brand-base/85'>
								Model companies care about environment quality and evaluation signal. Indian IT and enterprise software teams care about practical terms, retained IP, and whether the process is worth the effort. W8-RL is built for both sides.
							</p>
							<p className='private-body max-w-3xl text-brand-base/78'>
								It gives model teams better rollouts, denser browser-visible rewards, and more reliable evaluation, while making older private systems cheaper and easier to turn into usable RL environments. India gives us unusually high density of those systems.
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
								<span className='terminal-title'>FDRL Deployment Model</span>
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
								What tends to work well for us.
							</h2>
							<p className='private-body max-w-3xl text-brand-text-secondary'>
								We generally prefer older private systems that already contain real workflows, integration edges, and useful verification surfaces. The goal is not raw repo access. The goal is turning the system into a usable W8-RL environment without forcing a heavy lift on your team.
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
								<span className='terminal-title'>Commercial Shape</span>
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
									Typical non-exclusive deals are often in the $5k-$25k range, with many codebases landing closer to $5k-$10k depending on quality, maturity, and usefulness.
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
								What to send and what people usually ask.
							</h2>
							<p className='private-body max-w-2xl text-brand-base/80'>
								Keep the first note short. If the system looks like a fit, we can go deeper after the first pass.
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
								If your team is sitting on older private systems, we&apos;d be glad to talk.
							</h2>
							<p className='private-body text-brand-text-secondary'>
								A short note is enough to start. We can begin with context, not paperwork, and see whether a respectful non-exclusive path makes sense.
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

export default function WootzBrowser() {
	return (
		<section className='relative overflow-hidden bg-brand-base py-10 text-brand-text-primary'>
			<div className='absolute inset-0 sci-scanlines pointer-events-none' />
			<div className='absolute -top-24 left-[-10%] size-[280px] rounded-full sci-orb sci-float pointer-events-none' />
			<div className='absolute bottom-[-35%] right-[-10%] size-[360px] rounded-full sci-orb opacity-60 pointer-events-none' />
			<div className='container-custom relative z-10'>
				<div className='mx-auto max-w-6xl'>
					<div className='terminal-window reveal glow-box'>
						{/* header */}
						<div className='terminal-header'>
							<div className='flex items-center space-x-2'>
								<svg
									aria-hidden='true'
									className='size-4 text-brand-text-muted'
									fill='none'
									stroke='currentColor'
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									viewBox='0 0 24 24'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path d='M12 19h8' />
									<path d='m4 17 6-6-6-6' />
								</svg>
								<span className='font-mono text-xs text-brand-text-secondary'>wootz-browser</span>
							</div>
							<div className='hidden items-center space-x-2 font-mono text-[0.65rem] text-brand-text-muted sm:flex'>
								<svg
									aria-hidden='true'
									className='size-3'
									fill='none'
									stroke='currentColor'
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									viewBox='0 0 24 24'
									xmlns='http://www.w3.org/2000/svg'
								>
									<line x1='6' x2='6' y1='3' y2='15' />
									<circle cx='18' cy='6' r='3' />
									<circle cx='6' cy='18' r='3' />
									<path d='M18 9a9 9 0 0 1-9 9' />
								</svg>
								<span>main</span>
								<span className='inline-block size-2 rounded-full bg-brand-accent-200 animate-pulse' />
							</div>
						</div>

						<div className='grid min-h-[280px] gap-0 md:grid-cols-2'>
							{/* terminal */}
							<div className='space-y-4 bg-brand-base p-4'>
								<p className='mb-3 font-["Fira_Code","JetBrains_Mono",ui-monospace] text-xs text-brand-accent-200'>
									researcher@lab:~$ # Browser evidence pipeline
								</p>

								<div className='space-y-4'>
									<div className='space-y-1'>
										<p className='font-["Fira_Code","JetBrains_Mono",ui-monospace] text-xs text-brand-accent-200'>
											<span className='text-brand-accent-100'>$ </span>
											w8 snapshot --workflow claims-admin --mode private
										</p>
										<div className='ml-2 space-y-0.5'>
											<p className='font-["Fira_Code","JetBrains_Mono",ui-monospace] text-xs text-brand-text-secondary'>✓ Boundary map ..................... LOADED</p>
											<p className='font-["Fira_Code","JetBrains_Mono",ui-monospace] text-xs text-brand-text-secondary'>✓ Sensitive fields ................. CONSTRAINED</p>
											<p className='font-["Fira_Code","JetBrains_Mono",ui-monospace] text-xs text-brand-text-secondary'>✓ Browser evidence ................. CAPTURED</p>
										</div>
									</div>

									<div className='terminal-divider' />

									<div className='space-y-1'>
										<p className='font-["Fira_Code","JetBrains_Mono",ui-monospace] text-xs text-brand-accent-200'>
											<span className='text-brand-accent-100'>$ </span>w8 verify --trajectory run_0421
										</p>
										<div className='ml-2 space-y-0.5'>
											<p className='font-["Fira_Code","JetBrains_Mono",ui-monospace] text-xs text-brand-text-secondary'>process_reward: 0.86</p>
											<p className='font-["Fira_Code","JetBrains_Mono",ui-monospace] text-xs text-brand-text-secondary'>outcome_success: true</p>
											<p className='font-["Fira_Code","JetBrains_Mono",ui-monospace] text-xs text-brand-text-secondary'>environment_blocker: false</p>
										</div>
									</div>

									<div className='terminal-divider' />

									<div className='space-y-1'>
										<p className='font-["Fira_Code","JetBrains_Mono",ui-monospace] text-xs text-brand-accent-200'>
											<span className='text-brand-accent-100'>$ </span>cat privacy-ledger.json
										</p>
										<div className='ml-2 space-y-0.5'>
											<p className='font-["Fira_Code","JetBrains_Mono",ui-monospace] text-xs text-brand-text-secondary'>"retained_fields": "approved"</p>
											<p className='font-["Fira_Code","JetBrains_Mono",ui-monospace] text-xs text-brand-text-secondary'>"exported_artifacts": "reviewed"</p>
										</div>
									</div>
								</div>
							</div>

							{/* repo info */}
							<div className='space-y-4 border-t border-l border-dashed border-brand-border/70 bg-brand-surface p-4 font-mono text-brand-text-secondary md:border-t-0'>
								<div className='space-y-3 border-b border-dashed border-brand-border/70 pb-3'>
									<div className='mb-2 flex items-center space-x-2'>
										<div className='flex size-4 items-center justify-center rounded-sm bg-brand-text-primary'>
											<svg
												aria-hidden='true'
												className='size-2.5 text-black'
												fill='none'
												stroke='currentColor'
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth='2'
												viewBox='0 0 24 24'
												xmlns='http://www.w3.org/2000/svg'
											>
												<line x1='6' x2='6' y1='3' y2='15' />
												<circle cx='18' cy='6' r='3' />
												<circle cx='6' cy='18' r='3' />
												<path d='M18 9a9 9 0 0 1-9 9' />
											</svg>
										</div>
										<a
											href='https://github.com/wootzapp/wootz-browser'
											target='_blank'
											rel='noreferrer'
											className='font-mono text-sm text-brand-accent-200 hover:text-brand-accent-300'
										>
											wootzapp/wootz-browser
										</a>
									</div>
									<div className='flex items-center space-x-4 text-xs text-brand-text-muted'>
										<div className='flex items-center space-x-1'>
											<span className='inline-block size-2 rounded-full bg-brand-accent-200' />
											<span>W8 Privacy Spec</span>
										</div>
										<div className='flex items-center space-x-1'>
											<span className='text-brand-text-secondary'>Production Ready</span>
										</div>
										<span>Verified</span>
									</div>
								</div>

								<p className='text-xs leading-relaxed text-brand-text-secondary sm:text-sm'>
									The browser is the verifier. WootzApp records screenshots, DOM state, actions, and outcomes so W8-RL can score both execution quality and user-visible success without uncontrolled raw data movement.
								</p>

								<div className='grid gap-3 sm:grid-cols-2'>
									<div className='space-y-1'>
										<p className='font-mono text-xs text-brand-accent-200'>Evidence</p>
										<p className='text-xs text-brand-text-muted'>Screenshots + DOM</p>
									</div>
									<div className='space-y-1'>
										<p className='font-mono text-xs text-brand-accent-200'>Privacy</p>
										<p className='text-xs text-brand-text-muted'>Reviewed artifacts</p>
									</div>
									<div className='space-y-1'>
										<p className='font-mono text-xs text-brand-accent-200'>Process</p>
										<p className='text-xs text-brand-text-muted'>Rubric rewards</p>
									</div>
									<div className='space-y-1'>
										<p className='font-mono text-xs text-brand-accent-200'>Outcome</p>
										<p className='text-xs text-brand-text-muted'>Goal success</p>
									</div>
								</div>

								<div className='flex flex-col gap-2 pt-2 sm:flex-row'>
									<a
										href='/docs/intro'
										className='inline-flex w-full items-center justify-center gap-2 rounded-md bg-brand-text-primary px-4 py-2 font-mono text-xs font-medium text-brand-base transition hover:bg-brand-accent-200 hover:text-brand-base sm:w-auto'
									>
										<svg
											aria-hidden='true'
											className='size-3'
											fill='none'
											stroke='currentColor'
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
											viewBox='0 0 24 24'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path d='m16 18 6-6-6-6' />
											<path d='m8 6-6 6 6 6' />
										</svg>
										View W8 Docs
									</a>
									<a
										href='/private'
										className='inline-flex w-full items-center justify-center gap-2 rounded-md border border-brand-border px-4 py-2 font-mono text-xs font-medium text-brand-text-secondary transition hover:border-brand-accent-200 hover:bg-brand-accent-200 hover:text-brand-base sm:w-auto'
									>
										<svg
											aria-hidden='true'
											className='size-3'
											fill='none'
											stroke='currentColor'
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
											viewBox='0 0 24 24'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path d='M15 3h6v6' />
											<path d='M10 14 21 3' />
											<path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6' />
										</svg>
										Forward Deployed
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

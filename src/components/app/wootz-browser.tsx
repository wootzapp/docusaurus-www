export default function WootzBrowser() {
	return (
		<section className='py-6 md:py-8 bg-gradient-to-r text-[#0D1117]' style={{
			backgroundImage: 'linear-gradient(90deg, rgba(246,237,227,1) 0%, rgba(22,27,34,1) 100%)',
		}}>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='mx-auto max-w-6xl'>
					<div className='overflow-hidden rounded-[16px] border border-gray-700 bg-black shadow-2xl'>
						{/* header */}
						<div className='flex items-center justify-between border-b border-gray-700 bg-gray-800 px-4 py-2'>
							<div className='flex items-center space-x-2'>
								<div className='flex space-x-1'>
									<span className='inline-block size-3 rounded-full bg-red-500' />
									<span className='inline-block size-3 rounded-full bg-yellow-500' />
									<span className='inline-block size-3 rounded-full bg-green-500' />
								</div>
								<svg
									aria-hidden='true'
									className='size-4 text-gray-400'
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
								<span className='font-mono text-sm text-gray-300'>wootz-browser</span>
							</div>
							<div className='hidden items-center space-x-2 font-mono text-xs text-gray-400 sm:flex'>
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
								<span className='inline-block size-2 rounded-full bg-green-400 animate-pulse' />
							</div>
						</div>

						<div className='grid min-h-[280px] gap-0 md:grid-cols-2'>
							{/* terminal */}
							<div className='space-y-4 bg-black p-4'>
								<p className='mb-3 font-["Fira_Code","JetBrains_Mono",ui-monospace] text-xs text-green-400'>
									developer@enterprise:~$ # Explore the world's only open-source enterprise browser
								</p>

								<div className='space-y-4'>
									<div className='space-y-1'>
										<p className='font-["Fira_Code","JetBrains_Mono",ui-monospace] text-xs text-cyan-400'>
											<span className='text-green-400'>$ </span>
											git clone{' '}
											<a
												className='text-cyan-400 underline-offset-4 hover:underline'
												href='https://github.com/wootzapp/wootz-browser.git'
												rel='noreferrer'
												target='_blank'
											>
												https://github.com/wootzapp/wootz-browser.git
											</a>
										</p>
										<div className='ml-2 space-y-0.5'>
											<p className='font-["Fira_Code","JetBrains_Mono",ui-monospace] text-xs text-gray-300'>Cloning into 'wootz-browser'...</p>
											<p className='font-["Fira_Code","JetBrains_Mono",ui-monospace] text-xs text-gray-300'>✓ World's only open-source enterprise browser</p>
											<p className='font-["Fira_Code","JetBrains_Mono",ui-monospace] text-xs text-gray-300'>✓ Zero vendor lock-in, full transparency</p>
										</div>
									</div>

									<div className='space-y-1'>
										<p className='font-["Fira_Code","JetBrains_Mono",ui-monospace] text-xs text-cyan-400'>
											<span className='text-green-400'>$ </span>cat README.md | grep -i security
										</p>
										<div className='ml-2 space-y-0.5'>
											<p className='font-["Fira_Code","JetBrains_Mono",ui-monospace] text-xs text-gray-300'>🔒 Enterprise-grade DLP built-in</p>
											<p className='font-["Fira_Code","JetBrains_Mono",ui-monospace] text-xs text-gray-300'>🛡️ Zero-trust architecture ready</p>
											<p className='font-["Fira_Code","JetBrains_Mono",ui-monospace] text-xs text-gray-300'>🔍 Every line of code auditable</p>
										</div>
									</div>

									<div className='space-y-1'>
										<p className='font-["Fira_Code","JetBrains_Mono",ui-monospace] text-xs text-cyan-400'>
											<span className='text-green-400'>$ </span>run build --production
										</p>
										<div className='ml-2 space-y-0.5'>
											<p className='font-["Fira_Code","JetBrains_Mono",ui-monospace] text-xs text-gray-300'>Building enterprise browser...</p>
											<p className='font-["Fira_Code","JetBrains_Mono",ui-monospace] text-xs text-gray-300'>✓ Hardened Chromium base</p>
											<p className='font-["Fira_Code","JetBrains_Mono",ui-monospace] text-xs text-gray-300'>✓ Mobile-first security policies</p>
											<p className='font-["Fira_Code","JetBrains_Mono",ui-monospace] text-xs text-gray-300'>✓ Ready for production deployment</p>
										</div>
									</div>
								</div>
							</div>

							{/* repo info */}
							<div className='space-y-4 border-t border-l border-gray-700 bg-gray-900 p-4 text-[#C9D1D9] md:border-t-0'>
								<div className='space-y-3 border-b border-gray-700 pb-3'>
									<div className='mb-2 flex items-center space-x-2'>
										<div className='flex size-4 items-center justify-center rounded-sm bg-white'>
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
											className='font-mono text-sm text-cyan-400 hover:text-cyan-300'
										>
											wootzapp/wootz-browser
										</a>
									</div>
									<div className='flex items-center space-x-4 text-xs text-gray-400'>
										<div className='flex items-center space-x-1'>
											<span className='inline-block size-2 rounded-full bg-orange-500' />
											<span>Familiar Chromium-based source</span>
										</div>
										<div className='flex items-center space-x-1'>
											<span>⭐</span>
											<span className='text-gray-300'>Public</span>
										</div>
										<span>Updated now</span>
									</div>
								</div>

								<p className='text-xs leading-relaxed text-gray-300 sm:text-sm'>
									The world's only open-source enterprise browser. Built on hardened Chromium with enterprise security, mobile-first design, and zero vendor lock-in.
								</p>

								<div className='grid gap-3 sm:grid-cols-2'>
									<div className='space-y-1'>
										<p className='font-mono text-xs text-cyan-400'>🔓 Open Source</p>
										<p className='text-xs text-gray-400'>Audit every line</p>
									</div>
									<div className='space-y-1'>
										<p className='font-mono text-xs text-cyan-400'>🏢 Enterprise</p>
										<p className='text-xs text-gray-400'>Production ready</p>
									</div>
									<div className='space-y-1'>
										<p className='font-mono text-xs text-cyan-400'>📱 Mobile First</p>
										<p className='text-xs text-gray-400'>Android native</p>
									</div>
									<div className='space-y-1'>
										<p className='font-mono text-xs text-cyan-400'>🛡️ Zero Trust</p>
										<p className='text-xs text-gray-400'>Built-in DLP</p>
									</div>
								</div>

								<div className='flex flex-col gap-2 pt-2 sm:flex-row'>
									<a
										href='https://github.com/wootzapp/wootz-browser'
										target='_blank'
										rel='noreferrer'
										className='inline-flex w-full items-center justify-center gap-2 rounded-md bg-white px-4 py-2 font-mono text-xs font-medium text-black transition hover:bg-blue-600 hover:text-white sm:w-auto'
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
										View Source
									</a>
									<a
										href='https://github.com/wootzapp/wootz-browser/fork'
										target='_blank'
										rel='noreferrer'
										className='inline-flex w-full items-center justify-center gap-2 rounded-md border border-gray-600 px-4 py-2 font-mono text-xs font-medium text-gray-300 transition hover:border-blue-600 hover:bg-blue-600 hover:text-white sm:w-auto'
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
										Fork the Code
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

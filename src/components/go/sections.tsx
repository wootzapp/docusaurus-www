const demandSignals = [
	"POC with one of the top-3 Model Lab",
	"POC with a neolab",
	"POC with Lovable competitors",
	"Partnership with GPU neoclouds to offer RL to their customers",
];

const supplySignal =
	"Supply side data partnerships with a publicly listed Indian company with 18,000 employees and 7 group companies";

const linkCards = [
	{
		label: "Book a meeting",
		copy: "For model labs, GPU neoclouds, and private-code partners.",
		href: "https://calendar.app.google/jjLE5C9TczR2vhHe9",
	},
	{
		label: "WootzApp website",
		copy: "W8-RL infrastructure for browser-based reinforcement learning.",
		href: "https://www.wootzapp.com",
	},
	{
		label: "Private YouTube demo",
		copy: "A short walkthrough of the WootzApp environment loop.",
		href: "https://www.youtube.com/watch?v=OtjI9PznF2E",
	},
	{
		label: "Huggingface Preprint - Wootzapp Domdiff RL",
		copy: "ChromiumRL WootzApp DOM diff dataset on Hugging Face.",
		href: "https://huggingface.co/datasets/WootzappLab/chromiumrl-wootzapp-domdiff",
	},
];

export default function GoPageContent() {
	return (
		<main className='go-page'>
			<section className='go-hero' aria-labelledby='go-title'>
				<div className='go-grid' />
				<div className='go-motion-field' aria-hidden='true'>
					<span className='go-motion-orb' />
					<svg className='go-wave-ribbons' viewBox='0 0 100 100' preserveAspectRatio='none'>
						<defs>
							<linearGradient id='go-ribbon-hot' x1='0' y1='0' x2='100' y2='0' gradientUnits='userSpaceOnUse'>
								<stop offset='0%' stopColor='#f28b32' stopOpacity='0' />
								<stop offset='20%' stopColor='#f28b32' stopOpacity='0.72' />
								<stop offset='48%' stopColor='#ffe1bc' stopOpacity='0.82' />
								<stop offset='76%' stopColor='#ffb15f' stopOpacity='0.68' />
								<stop offset='100%' stopColor='#f28b32' stopOpacity='0' />
							</linearGradient>
							<linearGradient id='go-ribbon-deep' x1='0' y1='0' x2='100' y2='0' gradientUnits='userSpaceOnUse'>
								<stop offset='0%' stopColor='#7d3d18' stopOpacity='0' />
								<stop offset='34%' stopColor='#a6501e' stopOpacity='0.58' />
								<stop offset='62%' stopColor='#f28b32' stopOpacity='0.76' />
								<stop offset='100%' stopColor='#7d3d18' stopOpacity='0' />
							</linearGradient>
						</defs>
						<g className='go-ribbon go-ribbon-a'>
							<path
								className='go-ribbon-path go-ribbon-path-main'
								d='M -8 31 C 5 18 18 17 31 31 C 43 44 55 49 68 34 C 80 21 94 21 108 34'
								stroke='url(#go-ribbon-hot)'
							/>
						</g>
						<g className='go-ribbon go-ribbon-b'>
							<path
								className='go-ribbon-path go-ribbon-path-secondary'
								d='M -8 50 C 7 42 21 37 35 48 C 49 60 61 64 75 50 C 87 38 98 39 108 47'
								stroke='url(#go-ribbon-deep)'
							/>
						</g>
						<g className='go-ribbon go-ribbon-c'>
							<path
								className='go-ribbon-path go-ribbon-path-main'
								d='M -8 67 C 9 76 22 75 36 62 C 49 49 62 47 76 60 C 88 71 98 72 108 64'
								stroke='url(#go-ribbon-hot)'
							/>
						</g>
						<g className='go-ribbon go-ribbon-d'>
							<path
								className='go-ribbon-path go-ribbon-path-fine'
								d='M -8 20 C 8 27 20 29 35 20 C 49 12 63 10 78 19 C 91 27 101 27 108 22'
								stroke='url(#go-ribbon-hot)'
							/>
						</g>
					</svg>
					<span className='go-motion-current' />
					<span className='go-motion-ember' />
				</div>

				<div className='go-frame'>
					<div className='go-copy'>
						<div className='go-brand-row'>
							<img src='/img/fav.png' alt='WootzApp' className='go-brand-mark' />
							<span>WootzApp / W8-RL</span>
						</div>

						<p className='go-kicker'>Confidential RL Environment Infrastructure</p>
						<h1 id='go-title' className='go-title'>
							Foundation Model Labs use Wootzapp for their most secretive RL Environments
						</h1>

						<div className='go-recent-card'>
							<p className='go-recent-heading'>In the past 30 days, we have</p>
							<ol className='go-recent-list'>
								{demandSignals.map((signal) => (
									<li key={signal}>
										<span>{signal}</span>
									</li>
								))}
							</ol>
							<div className='go-supply-signal'>
								<span className='go-supply-label'>Supply side</span>
								<strong>{supplySignal}</strong>
							</div>
						</div>

						<a href='/go' className='go-url-card' aria-label='Open www.wootzapp.com/go'>
							<span className='go-url-copy'>
								<span className='go-url-label'>Visit</span>
								<strong>www.wootzapp.com/go</strong>
							</span>
							<img
								src='/img/go-qr.svg'
								alt='QR code for www.wootzapp.com/go'
								className='go-url-qr'
							/>
						</a>
					</div>
				</div>
			</section>

			<section className='go-links-section' aria-labelledby='go-links-title'>
				<div className='go-links-wrap'>
					<div className='go-links-card'>
						<img src='/img/fav.png' alt='WootzApp' className='go-profile-mark' />
						<p className='go-profile-handle'>@wootzapp</p>
						<h2 id='go-links-title' className='go-links-title'>
							RL environments for coding models.
						</h2>
						<p className='go-links-copy'>
							WootzApp builds private, repeatable browser environments with rollout and reward
							infrastructure for model teams.
						</p>

						<div className='go-link-stack'>
							{linkCards.map((link) => (
								<a key={link.href} href={link.href} className='go-link-card'>
									<span>
										<strong>{link.label}</strong>
										<small>{link.copy}</small>
									</span>
									<b>Open</b>
								</a>
							))}
						</div>

						<a href='/go' className='go-mini-url'>
							www.wootzapp.com/go
						</a>
					</div>
				</div>
			</section>
		</main>
	);
}

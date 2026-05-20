const recentSignals = [
	"POC with one of the top-3 Model Lab",
	"POC with a neolab",
	"POC with Lovable competitors",
	"Partnership with GPU neoclouds to offer RL to their customers",
];

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
					<span className='go-motion-wave' />
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
							Foundational Model Labs use Wootzapp for their most secretive RL Environments
						</h1>

						<div className='go-recent-card'>
							<p className='go-recent-heading'>In the past 30 days, we have</p>
							<ol className='go-recent-list'>
								{recentSignals.map((signal) => (
									<li key={signal}>
										<span>{signal}</span>
									</li>
								))}
							</ol>
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

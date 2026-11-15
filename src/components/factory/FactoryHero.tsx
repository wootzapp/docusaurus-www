import React from "react";
import CtaLink from "../editorial/cta-link";
import Eyebrow from "../editorial/eyebrow";
import styles from "./Factory.module.css";

export default function FactoryHero() {
	return (
		<section className={styles.hero} aria-labelledby='factory-title'>
			<div className='ed-container'>
				<div className={styles.masthead}>
					<Eyebrow>WootzApp Factory / System architecture</Eyebrow>
					<span className='text-[0.875rem] text-ed-graphite'>Execution · Capture · Post-training</span>
				</div>
				<div className={styles.heroGrid}>
					<div className={styles.heroCopy}>
						<h1 id='factory-title' className={styles.title}>Openrind Shell.<br /><span>Engineered for continual learning.</span></h1>
						<p className='ed-lede m-0 max-w-[37rem] text-ed-graphite'>
							Openrind Shell couples native agent execution with a persistent filesystem and model-context capture scoped by signed session identity. In the Desktop deployment, Linux sandboxes run inside a VM. The gateway constructs reviewed, recorded-session RFT + OPSD supervision from eligible conversations.
						</p>
						<div className={styles.ctas}>
							<CtaLink href='/research/openrind-shell'>Read the runtime</CtaLink>
							<CtaLink href='#factory-loop' variant='text'>RFT + OPSD method</CtaLink>
						</div>
					</div>
					<figure className={styles.loop}>
						<figcaption className={styles.loopCaption}>
							<Eyebrow className='text-ed-accent'>Figure 01 / Execution &amp; capture</Eyebrow>
						</figcaption>
						<div className={styles.vmFrame}>
							<span className={styles.vmLabel}>Desktop deployment / WSL2 virtual machine</span>
							<div className={styles.runtimeBoundary}>
								<span className={styles.runtimeLabel}>Linux agent sandbox</span>
								<strong>Native agent processes</strong>
								<p>bash · git · compilers · tests</p>
								<div className={styles.workspacePath}><span>Supervised FUSE mount</span><code>/sandbox/work</code></div>
							</div>
							<p className={styles.policyLabel}>Filesystem · process · network policies</p>
						</div>
						<dl className={styles.recordPaths}>
							<div><dt>Project I/O ↓</dt><dd><strong>PostgreSQL</strong><span>Committed workspace state</span></dd></div>
							<div><dt>Model calls ↓</dt><dd><strong>Capture gateway</strong><span>Session-scoped histories</span></dd></div>
						</dl>
						<p className={styles.loopNote}>Workspace storage and model-context capture are separate paths.</p>
					</figure>
				</div>
				<nav className={styles.systemIndex} aria-label='Factory technical overview'>
					<a href='#factory-runtime'><span>01</span> Execution &amp; CTF capture</a>
					<a href='#factory-loop'><span>02</span> RFT + OPSD</a>
					<a href='#factory-research'><span>03</span> Research</a>
				</nav>
			</div>
		</section>
	);
}

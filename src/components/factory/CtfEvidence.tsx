import React from "react";
import Eyebrow from "../editorial/eyebrow";
import CtaLink from "../editorial/cta-link";
import useAnchor from "../editorial/use-anchor";
import styles from "./Factory.module.css";

export default function CtfEvidence() {
	useAnchor("factory-cybersecurity");
	return (
		<article id='factory-cybersecurity' className={styles.ctfEvidence} aria-labelledby='factory-ctf-title'>
			<div>
				<Eyebrow className={styles.ctfEyebrow}>Cybersecurity / CTF instrumentation</Eyebrow>
				<h3 id='factory-ctf-title'>CTF traces with independent flag verification.</h3>
				<p>The CTF capture path links model interactions and browser steps with challenge-side HTTP metadata and flag-judge results. This supplies evidence outside the model’s request/response stream, so researchers can inspect an attempted solve alongside its independently judged flag outcome.</p>
				<p className={styles.ctfExamples}>Examples: Flag Command · GlacierXchange</p>
				<CtaLink href='/research/openrind-shell#ctf-trace-capture' variant='text'>CTF runtime &amp; evidence formats</CtaLink>
			</div>
			<div>
				<dl className={styles.ctfArtifacts}>
					<div><dt><code>trajectory.json</code></dt><dd>Actions, observations, timings, and judge verdict.</dd></div>
					<div><dt><code>events.jsonl</code></dt><dd>Model requests/responses, step events, and errors.</dd></div>
					<div><dt><code>challenge-events.jsonl</code></dt><dd>HTTP method, path, status, and timing, plus judge events, scoped to the run.</dd></div>
				</dl>
				<p className={styles.ctfNote}>DOM snapshots appear in observations; screenshot files are linked when captured.</p>
				<details className={styles.ctfDetails}>
					<summary>CTF capture and persistence path</summary>
					<p>The standalone CTF runner writes local JSON/JSONL evidence through a separate model route. This path is independent of managed gateway capture and does not automatically create an OPSD dataset. Its FUSE persistence test flushes trajectory and event files, recreates the owner sandbox with the same workspace ID, and checks file hashes.</p>
				</details>
			</div>
		</article>
	);
}

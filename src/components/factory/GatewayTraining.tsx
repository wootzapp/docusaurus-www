import React from "react";
import Section from "../editorial/section";
import Eyebrow from "../editorial/eyebrow";
import styles from "./GatewayTraining.module.css";

// Claim sources in gateway: README.md, "What is OPSD?"; HALOOP.md:1147–1340;
// halo-loop/services/opsd/{pipeline,store,tinker_runtime,worker}.py.
// Schematic tool-error example from README.md:871–878.
const recordedContinuation = 'recency_filter="24h"';

export default function GatewayTraining() {
	return (
		<Section id='factory-loop' tone='ink' className={styles.section}>
			<div className={styles.intro}>
				<div>
					<Eyebrow className={`text-ed-accent ${styles.eyebrow}`}>02 / Learning objective</Eyebrow>
					<h2 className={`ed-h2 ${styles.title}`}>Supervision at recorded token positions.</h2>
				</div>
				<p className={`ed-lede ${styles.introCopy}`}>The gateway implements rejection-sampling fine-tuning (RFT) and a recorded-session form of on-policy self-distillation (OPSD). Complete sessions are judged, annotated, validated, and sealed before an offline update through Tinker.</p>
			</div>

			<dl className={styles.signals}>
				<div><dt>CE / RFT</dt><dd>Imitate exact recorded tokens from safe turns in sessions judged successful.</dd></div>
				<div><dt>Hinted forward KL / OPSD</dt><dd>Bad turns with grounded, validated hints receive distribution targets from the teacher.</dd></div>
				<div><dt>Context only</dt><dd>All other retained turns supply history for later decisions, with zero direct loss.</dd></div>
			</dl>

			<figure className={styles.distillation} aria-labelledby='factory-distillation-title'>
				<div className={styles.diagramHeading}>
					<div>
						<h3 id='factory-distillation-title'>Privileged context. Shared recorded tokens.</h3>
						<p>Same source weights · offline teacher forcing</p>
					</div>
					<div className={styles.recorded}>
						<span>Recorded continuation · schematic</span>
						<code>{recordedContinuation}</code>
					</div>
				</div>
				<div className={styles.modelGrid}>
					<div className={`${styles.model} ${styles.teacher}`}>
						<h4>Teacher <span>Frozen / stop-gradient</span></h4>
						<p>Recorded context <strong>+ validated hint</strong></p>
						<code className={styles.hint}>Use day, week, or month.</code>
					</div>
					<div className={`${styles.model} ${styles.student}`}>
						<h4>Student <span>Trainable</span></h4>
						<p>Recorded context <strong>· no hint</strong></p>
					</div>
				</div>
				<p className={styles.transfer}>Teacher → student · renormalized top-K forward KL approximation</p>
				<figcaption>Both score the original continuation, including the bad call; no replacement answer becomes a target.</figcaption>
			</figure>
			<div className={styles.objective}>
				<p className={styles.objectiveLabel}>Schematic loss · top-K approximation</p>
				<p className={styles.formula}><span>L ≈ (Σ CE</span><span>+ λ Σ KL<sub>top-K</sub>) / N<sub>CE</sub></span></p>
				<p className={styles.objectiveNote}>λ weights distillation; N<sub>CE</sub> is the selected CE-token count. CE and KL masks are disjoint.</p>
			</div>

			<p className={styles.lifecycle}>Versioned human review → seal dataset + explicit digest-bound training approval → offline update.</p>
			<p className={styles.evaluation}>Checkpoint evaluation and promotion are separate from the implemented update. The protocol below defines the proposed comparison.</p>

			<details className={styles.details}>
				<summary>Method boundaries</summary>
				<div className={styles.detailsBody}>
					<p>Training runs offline on eligible, complete recorded sessions with supported text/tool renderers. Unsupported content and over-context sequences are rejected. Safe turns from successful sessions receive CE; bad turns with validated hints receive KL. Other retained turns remain context, including bad turns whose hints fail validation.</p>
					<p>Teacher and student start from the same source weights. The frozen teacher receives validated privileged hints; the student receives none. Both teacher-force the saved continuation. Renormalized teacher top-K targets approximate forward KL, not exact full-vocabulary distillation. CE and KL masks are disjoint and share the selected-CE-token denominator.</p>
					<p>Edits advance the human-reviewed revision and invalidate prior validation. Training requires explicit approval bound to the sealed dataset’s SHA-256 digest. An isolated worker uses Tinker for one combined optimizer step and saves training-state and sampler checkpoints. Hint validation checks next responses without executing tools; separate held-out checkpoint evaluation informs promotion.</p>
				</div>
			</details>
		</Section>
	);
}

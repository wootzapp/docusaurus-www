import React from "react";
import Link from "@docusaurus/Link";
import Spec from "./spec";
import {ctfVisual as v} from "./ctf.copy";
import Diagram, {bottom, cx, cy, wrap, type DLayout, type DNode} from "./diagram";

// § 03. The CTF capture setup as one drawing. The run is the spine across the top: agent execution and Chromium
// inside the host (the agent inside the OpenShell sandbox), and the challenge service with its HTTP proxy, imported
// application, and flag-judge endpoint. The ground is drawn beneath the agent: the three records in /sandbox/work, the
// mount and egress rules as labels, the persistence lane down to PostgreSQL and the persistence test (accent). The
// production path (gateway, sealed sessions, trainer) sits apart in dashed boxes under the challenge service, and a
// bar-ended line from the records says this runner sends nothing through it by itself. Each version 1 limit sits on
// the part it concerns. Wide layout from lg; a stacked layout below.

const n = v.nodes;
const e = v.edges;
const CHIP = "#ffffff";
const BG = "#fbe6d2";

// Pre-wrap box text with a slightly conservative glyph advance, so no line runs to its border.
const fit = (text: string, w: number) => wrap(text, Math.max(8, Math.floor((w - 20) / 6.9))).join("\n");
const fitText = (text: string, w: number) => wrap(text, Math.max(8, Math.floor(w / 6.9))).join("\n");

function wide(): DLayout {
	// Left column inside the host: sandbox, agent, records, daemon, then the proxy.
	const hostText: DNode = {id: "hostText", kind: "text", x: 12, y: 28, w: 340, text: fitText(n.host.text, 340), muted: true};
	const sandboxTop = 56;
	const sandboxText = fit(n.sandbox.text, 328);
	const agent: DNode = {id: "agent", kind: "box", x: 32, y: sandboxTop + 24 + sandboxText.split("\n").length * 15 + 16, w: 296, title: n.agent.title, text: fit(n.agent.text, 296), chip: n.agent.chip};
	const workTop = bottom(agent) + 44;
	const traj: DNode = {id: "traj", kind: "store", x: 44, y: workTop + 40, w: 272, title: n.traj.title, text: fit(n.traj.text, 272)};
	const chal: DNode = {id: "chal", kind: "store", x: 44, y: bottom(traj) + 12, w: 272, title: n.chal.title, text: fit(n.chal.text, 272)};
	const events: DNode = {id: "events", kind: "store", x: 44, y: bottom(chal) + 12, w: 272, title: n.events.title, text: fit(n.events.text, 272)};
	const work: DNode = {id: "work", kind: "group", x: 32, y: workTop, w: 296, h: bottom(events) + 16 - workTop, title: n.work, rawTitle: true};
	const daemon: DNode = {id: "daemon", kind: "box", x: 32, y: bottom(work) + 44, w: 296, title: n.daemon.title, text: fit(n.daemon.text, 296)};
	const sandbox: DNode = {id: "sandbox", kind: "group", x: 16, y: sandboxTop, w: 328, h: bottom(daemon) + 16 - sandboxTop, title: n.sandbox.title, chip: n.sandbox.chip, text: sandboxText};
	const shellProxy: DNode = {id: "shellProxy", kind: "box", x: 32, y: bottom(sandbox) + 44, w: 296, title: n.shellProxy.title, text: fit(n.shellProxy.text, 296)};
	// Chromium shares the host with the sandbox.
	const chromium: DNode = {id: "chromium", kind: "box", x: 440, y: 96, w: 200, title: n.chromium.title, text: fit(n.chromium.text, 200), chip: n.chromium.chip};
	const host: DNode = {id: "host", kind: "outer", x: 0, y: 16, w: 656, h: bottom(shellProxy) + 16 - 16, title: n.host.title};
	const pg: DNode = {id: "pg", kind: "store", x: 32, y: bottom(host) + 44, w: 296, title: n.postgres.title, text: fit(n.postgres.text, 296)};
	const persistence: DNode = {id: "persistence", kind: "box", x: 460, y: 0, w: 260, title: n.persistence.title, text: fit(n.persistence.text, 260)};
	persistence.y = Math.round(cy(pg) - 32);

	// Right column: the challenge service, then the production path beneath it.
	const proxy: DNode = {id: "proxy", kind: "box", x: 706, y: 112, w: 155, title: n.proxy.title, text: fit(n.proxy.text, 155)};
	const app: DNode = {id: "app", kind: "box", x: 877, y: 112, w: 147, title: n.app.title, text: fit(n.app.text, 147)};
	const judge: DNode = {id: "judge", kind: "box", x: 706, y: Math.max(bottom(proxy), bottom(app)) + 30, w: 318, title: n.judge.title, text: fit(n.judge.text, 318), chip: n.judge.chip};
	const challenge: DNode = {id: "challenge", kind: "group", x: 690, y: 80, w: 350, h: bottom(judge) + 16 - 80, title: n.challenge};
	const prodTop = Math.round(cy(chal)) + 24;
	const gateway: DNode = {id: "gateway", kind: "box", x: 706, y: prodTop + 32, w: 318, title: n.gateway.title, text: fit(n.gateway.text, 318), muted: true};
	const trainer: DNode = {id: "trainer", kind: "box", x: 706, y: bottom(gateway) + 40, w: 318, title: n.trainer.title, text: fit(n.trainer.text, 318), muted: true};
	const production: DNode = {id: "production", kind: "group", x: 690, y: prodTop, w: 350, h: bottom(trainer) + 16 - prodTop, title: n.production};

	const mid = cx(agent);
	const rail = 390;
	const stepsY = agent.y + 25;
	const flagY = cy(judge);
	const noneY = cy(gateway);
	const labelX = sandbox.x + sandbox.w + 12;
	const label = (a: number, b: number) => Math.round((a + b) / 2 + 4);

	return {
		w: 1040,
		h: Math.max(bottom(pg), bottom(persistence)) + 4,
		nodes: [host, hostText, sandbox, agent, work, traj, chal, events, daemon, shellProxy, pg, persistence, chromium, challenge, proxy, app, judge, production, gateway, trainer],
		edges: [
			{id: "steps", points: [[agent.x + agent.w, stepsY], [chromium.x, stepsY]], label: [e.steps], at: [labelX, stepsY - 7]},
			{id: "http", points: [[chromium.x + chromium.w, cy(proxy)], [proxy.x, cy(proxy)]], label: [e.http], at: [host.x + host.w + 4, cy(proxy) - 7]},
			{id: "proxyapp", points: [[proxy.x + proxy.w, cy(proxy)], [app.x, cy(proxy)]]},
			{id: "flag", points: [[agent.x + agent.w, agent.y + 41], [rail, agent.y + 41], [rail, flagY], [judge.x, flagY]], label: [e.flag], at: [rail + 10, flagY - 7]},
			{id: "acceptance", points: [[judge.x + 40, bottom(judge)], [judge.x + 40, cy(traj)], [traj.x + traj.w, cy(traj)]], label: [e.acceptance], at: [labelX, cy(traj) - 7]},
			{id: "judgeEvents", points: [[judge.x + judge.w - 60, bottom(judge)], [judge.x + judge.w - 60, cy(chal)], [chal.x + chal.w, cy(chal)]], label: [e.judgeEvents], at: [labelX, cy(chal) - 7]},
			{id: "writer", points: [[mid, bottom(agent)], [mid, work.y]], label: [e.writer], at: [mid + 8, label(bottom(agent), work.y)]},
			{id: "fileOps", points: [[mid, bottom(work)], [mid, daemon.y]], label: [e.fileOps], at: [mid + 8, label(bottom(work), daemon.y)]},
			{id: "connect", points: [[mid, bottom(daemon)], [mid, shellProxy.y]], label: [e.connect], at: [mid + 8, label(bottom(daemon), shellProxy.y)]},
			{id: "tls", points: [[mid, bottom(shellProxy)], [mid, pg.y]], label: [e.tls], at: [mid + 8, label(bottom(shellProxy), pg.y)]},
			{id: "committed", points: [[pg.x + pg.w, cy(pg)], [persistence.x, cy(pg)]], accent: true, label: [e.committed], at: [(pg.x + pg.w + persistence.x) / 2, cy(pg) - 7], anchor: "middle"},
			{id: "none", points: [[work.x + work.w, noneY], [production.x - 6, noneY]], end: "bar", label: e.none, at: [labelX, noneY - 19]},
			{id: "sealed", points: [[cx(gateway), bottom(gateway)], [cx(gateway), trainer.y]], dashed: true, label: [e.sealed], at: [cx(gateway) + 8, label(bottom(gateway), trainer.y)]},
		],
	};
}

function narrow(): DLayout {
	const w = 343;
	const col = 36;
	const colW = 268;
	const right = col + colW;
	const gap = 40;
	// Challenge service first, judge at the top, so the browser edge below reaches the proxy directly.
	const challengeTop = 8;
	const judge: DNode = {id: "judge", kind: "box", x: col + 10, y: challengeTop + 32, w: colW - 20, title: n.judge.title, text: fit(n.judge.text, colW - 20), chip: n.judge.chip};
	const app: DNode = {id: "app", kind: "box", x: col + 10, y: bottom(judge) + 14, w: colW - 20, title: n.app.title, text: fit(n.app.text, colW - 20)};
	const proxy: DNode = {id: "proxy", kind: "box", x: col + 10, y: bottom(app) + 14, w: colW - 20, title: n.proxy.title, text: fit(n.proxy.text, colW - 20)};
	const challenge: DNode = {id: "challenge", kind: "group", x: col, y: challengeTop, w: colW, h: bottom(proxy) + 16 - challengeTop, title: n.challenge};

	const hostTop = bottom(challenge) + gap + 4;
	const hostText: DNode = {id: "hostText", kind: "text", x: col + 10, y: hostTop + 12, w: 200, text: fitText(n.host.text, 200), muted: true};
	const chromium: DNode = {id: "chromium", kind: "box", x: col + 10, y: bottom(hostText) + 18, w: colW - 20, title: n.chromium.title, text: fit(n.chromium.text, colW - 20), chip: n.chromium.chip};
	const sandboxTop = bottom(chromium) + 28;
	const sandboxText = fit(n.sandbox.text, colW - 20);
	const sandbox: DNode = {id: "sandbox", kind: "group", x: col + 10, y: sandboxTop, w: colW - 20, title: n.sandbox.title, chip: n.sandbox.chip, text: sandboxText};
	const agent: DNode = {id: "agent", kind: "box", x: col + 22, y: sandboxTop + 24 + sandboxText.split("\n").length * 15 + 14, w: colW - 44, title: n.agent.title, text: fit(n.agent.text, colW - 44), chip: n.agent.chip};
	const workTop = bottom(agent) + gap;
	const traj: DNode = {id: "traj", kind: "store", x: col + 34, y: workTop + 36, w: colW - 68, title: n.traj.title, text: fit(n.traj.text, colW - 68)};
	const chal: DNode = {id: "chal", kind: "store", x: col + 34, y: bottom(traj) + 12, w: colW - 68, title: n.chal.title, text: fit(n.chal.text, colW - 68)};
	const events: DNode = {id: "events", kind: "store", x: col + 34, y: bottom(chal) + 12, w: colW - 68, title: n.events.title, text: fit(n.events.text, colW - 68)};
	const work: DNode = {id: "work", kind: "group", x: col + 22, y: workTop, w: colW - 44, h: bottom(events) + 16 - workTop, title: n.work, rawTitle: true, titleInside: true};
	const daemon: DNode = {id: "daemon", kind: "box", x: col + 22, y: bottom(work) + gap + 8, w: colW - 44, title: n.daemon.title, text: fit(n.daemon.text, colW - 44)};
	sandbox.h = bottom(daemon) + 16 - sandboxTop;
	const shellProxy: DNode = {id: "shellProxy", kind: "box", x: col + 10, y: bottom(sandbox) + gap, w: colW - 20, title: n.shellProxy.title, text: fit(n.shellProxy.text, colW - 20)};
	const host: DNode = {id: "host", kind: "outer", x: col, y: hostTop, w: colW, h: bottom(shellProxy) + 16 - hostTop, title: n.host.title};
	const pg: DNode = {id: "pg", kind: "store", x: col, y: bottom(host) + gap, w: colW, title: n.postgres.title, text: fit(n.postgres.text, colW)};
	const persistence: DNode = {id: "persistence", kind: "box", x: col, y: bottom(pg) + gap, w: colW, title: n.persistence.title, text: fit(n.persistence.text, colW)};
	const prodTop = bottom(persistence) + gap + 4;
	const gateway: DNode = {id: "gateway", kind: "box", x: col + 10, y: prodTop + 32, w: colW - 20, title: n.gateway.title, text: fit(n.gateway.text, colW - 20), muted: true};
	const trainer: DNode = {id: "trainer", kind: "box", x: col + 10, y: bottom(gateway) + gap, w: colW - 20, title: n.trainer.title, text: fit(n.trainer.text, colW - 20), muted: true};
	const production: DNode = {id: "production", kind: "group", x: col, y: prodTop, w: colW, h: bottom(trainer) + 16 - prodTop, title: n.production};

	const mid = col + colW / 2;
	// The vertical lane runs left of centre, clear of chips and titles on the top borders.
	const lane = col + 70;
	// The browser edge runs up the right part of the boxes, clear of the host's text line.
	const httpX = right - 40;
	// Two rails on the right (browser steps and the bar line share the inner one at different heights; the flag takes
	// the outer one) and two on the left for the return edges, nested so no stub crosses a rail.
	const railIn = 320;
	const railOut = 338;
	const leftIn = 20;
	const leftOut = 4;
	const label = (a: number, b: number) => Math.round((a + b) / 2 + 4);

	return {
		w,
		h: bottom(production) + 4,
		nodes: [challenge, judge, app, proxy, host, hostText, chromium, sandbox, agent, work, traj, chal, events, daemon, shellProxy, pg, persistence, production, gateway, trainer],
		edges: [
			{id: "proxyapp", points: [[mid, proxy.y], [mid, bottom(app)]]},
			{id: "http", points: [[httpX, chromium.y], [httpX, bottom(proxy)]], label: [e.http], at: [httpX + 8, label(bottom(proxy), chromium.y)]},
			{
				id: "steps",
				points: [[agent.x + agent.w, agent.y + 14], [railIn, agent.y + 14], [railIn, cy(chromium)], [chromium.x + chromium.w, cy(chromium)]],
				label: [e.steps],
				at: [railIn - 4, (agent.y + 14 + cy(chromium)) / 2],
				anchor: "middle",
				rotate: -90,
			},
			{
				id: "flag",
				points: [[agent.x + agent.w, agent.y + 40], [railOut, agent.y + 40], [railOut, cy(judge)], [judge.x + judge.w, cy(judge)]],
				label: [e.flag],
				at: [railOut - 4, (agent.y + 40 + cy(judge)) / 2],
				anchor: "middle",
				rotate: -90,
			},
			{
				id: "acceptance",
				points: [[judge.x, cy(judge) + 8], [leftIn, cy(judge) + 8], [leftIn, cy(traj)], [traj.x, cy(traj)]],
				label: [e.acceptance],
				at: [leftIn + 5, (cy(judge) + 8 + cy(traj)) / 2],
				anchor: "middle",
				rotate: 90,
			},
			{
				id: "judgeEvents",
				points: [[judge.x, cy(judge) - 8], [leftOut, cy(judge) - 8], [leftOut, cy(chal)], [chal.x, cy(chal)]],
				label: [e.judgeEvents],
				at: [leftOut + 3, (cy(judge) - 8 + cy(chal)) / 2],
				anchor: "middle",
				rotate: 90,
			},
			{id: "writer", points: [[lane, bottom(agent)], [lane, work.y]], label: [e.writer], at: [lane + 8, label(bottom(agent), work.y)]},
			{id: "fileOps", points: [[lane, bottom(work)], [lane, daemon.y]], label: [e.fileOps], at: [lane + 8, label(bottom(work), daemon.y)]},
			{id: "connect", points: [[lane, bottom(daemon)], [lane, shellProxy.y]], label: [e.connect], at: [lane + 8, label(bottom(daemon), shellProxy.y)]},
			{id: "tls", points: [[lane, bottom(shellProxy)], [lane, pg.y]], label: [e.tls], at: [lane + 8, label(bottom(shellProxy), pg.y)]},
			{id: "committed", points: [[lane, bottom(pg)], [lane, persistence.y]], accent: true, label: [e.committed], at: [lane + 8, label(bottom(pg), persistence.y)]},
			{id: "sealed", points: [[lane, bottom(gateway)], [lane, trainer.y]], dashed: true, label: [e.sealed], at: [lane + 8, label(bottom(gateway), trainer.y)]},
			{
				id: "none",
				points: [[work.x + work.w, cy(events)], [railIn, cy(events)], [railIn, cy(gateway)], [right + 6, cy(gateway)]],
				end: "bar",
				label: [e.noneLong],
				at: [railIn - 4, (cy(events) + cy(gateway)) / 2],
				anchor: "middle",
				rotate: -90,
			},
		],
	};
}

export default function Ctf() {
	return (
		<Spec id='ctf' n='03' title={v.title} tone='tint' lede={v.lede} layout='stack'>
			<figure className='m-0' aria-label={v.label}>
				<Diagram id='ctf-wide' layout={wide()} label={v.label} show='wide' bg={BG} chip={CHIP} />
				<Diagram id='ctf-narrow' layout={narrow()} label={v.label} show='narrow' bg={BG} chip={CHIP} />
			</figure>
			<Link to={v.link.href} className='ed-link mt-6 inline-block text-[0.875rem] font-medium'>
				{v.link.label} →
			</Link>
		</Spec>
	);
}

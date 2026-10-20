import Layout from "@theme/Layout";
import Section from "../../components/editorial/section";
import Eyebrow from "../../components/editorial/eyebrow";
import PaperHeader from "../../components/work/paper-header";
import {links, report} from "@site/src/data/research";

// Data path and guarantees, from openrind-shell ARCHITECTURE.md (branch nemo).
const dataPath = [
	{node: "Claude, git, compilers, editors, language servers", via: "POSIX syscalls"},
	{node: "Linux VFS · /sandbox/work", via: null},
	{node: "Kernel FUSE channel · supervisor-owned FD", via: null},
	{node: "openrind-shell-fused · sandbox UID + Landlock + seccomp", via: "HTTP CONNECT only, no direct-dial fallback"},
	{node: "OpenShell local proxy · binary-attributed endpoint policy", via: "Raw CONNECT tunnel, PostgreSQL TLS end to end"},
	{node: "PostgreSQL · _openeral.fs_* namespace", via: null},
];

const guarantees = [
	"The agent receives neither /dev/fuse nor mount capability.",
	"After the supervisor installs its TSYNC seccomp prelude, mount and unmount are denied.",
	"The FUSE daemon reaches PostgreSQL only through the OpenShell proxy; a valid proxy environment is mandatory.",
	"One writable daemon per workspace, enforced by a PostgreSQL advisory lock and an expiring, fenced lease.",
	"Committed data survives daemon, container, and sandbox replacement.",
];

export default function OpenrindShellPage() {
	return (
		<Layout
			title='Openrind Shell'
			description='Openrind Shell runs Claude Code in an isolated OpenShell sandbox with a PostgreSQL-backed FUSE project filesystem at /sandbox/work.'
		>
			<main className='ed-page'>
				<PaperHeader
					kind='Open-source runtime'
					title='Openrind Shell'
					subtitle='openrind/openrind-shell · branch nemo'
					byline={report.byline}
					abstract={
						<p className='m-0'>
							Openrind Shell runs Claude Code in an isolated OpenShell sandbox with a PostgreSQL-backed native project filesystem. Project
							files live on a FUSE mount at <code>/sandbox/work</code>, so every file operation in the workspace passes through one daemon
							that OpenShell supervises and keeps behind its default-deny network policy.
						</p>
					}
					stats={[
						{value: "FUSE", label: "Project filesystem at /sandbox/work"},
						{value: "256 KiB", label: "Sparse file chunks in PostgreSQL"},
						{value: "1 writer", label: "Per workspace, lease-fenced"},
						{value: "Default-deny", label: "Network policy for the daemon"},
					]}
					sources={[
						{label: "GitHub", href: links.openrindBranch},
						{label: "ARCHITECTURE.md", href: links.openrindArchitecture},
					]}
				/>

				<Section tone='surface'>
					<div className='grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.3fr)] lg:gap-20'>
						<div className='flex flex-col gap-5'>
							<Eyebrow>Data path</Eyebrow>
							<h2 className='ed-h3 m-0'>From the agent&apos;s syscall to a committed row.</h2>
						</div>
						<ol className='m-0 flex list-none flex-col p-0'>
							{dataPath.map((step, index) => (
								<li key={step.node} className='flex flex-col'>
									<div className='flex items-center gap-4 rounded-xl border border-ed-rule bg-ed-canvas px-4 py-3'>
										<span className='ed-mono text-[0.75rem] text-ed-accent-ink'>0{index + 1}</span>
										<span className='ed-mono text-[0.8125rem] text-ed-ink'>{step.node}</span>
									</div>
									{index < dataPath.length - 1 ? (
										<div className='ml-8 flex items-center gap-3 border-l border-ed-accent py-2.5 pl-4'>
											<span className='ed-mono text-[0.75rem] text-ed-smoke'>{step.via ?? "↓"}</span>
										</div>
									) : null}
								</li>
							))}
						</ol>
					</div>
				</Section>

				<Section>
					<div className='grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.3fr)] lg:gap-20'>
						<div className='flex flex-col gap-5'>
							<Eyebrow>Boundary</Eyebrow>
							<h2 className='ed-h3 m-0'>What the runtime enforces.</h2>
						</div>
						<ul className='m-0 flex list-none flex-col border-t border-ed-ink p-0'>
							{guarantees.map((item) => (
								<li key={item} className='border-b border-ed-rule py-4 text-[1rem] leading-relaxed text-ed-ink'>
									{item}
								</li>
							))}
						</ul>
					</div>
				</Section>

				<Section tone='surface'>
					<div className='grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.3fr)] lg:gap-20'>
						<div className='flex flex-col gap-5'>
							<Eyebrow>Status</Eyebrow>
							<h2 className='ed-h3 m-0'>Version 1 scope.</h2>
						</div>
						<ul className='m-0 flex list-none flex-col gap-3 p-0 text-[1rem] leading-relaxed text-ed-graphite'>
							<li>
								The FUSE capability is a default-off OpenShell patch pinned under <code>vendor/openshell</code>, pending a released upstream
								OpenShell version.
							</li>
							<li>Claude and the daemon share the sandbox UID. A separate storage UID and a supervisor-mediated secret channel are planned hardening.</li>
							<li>Built on NVIDIA OpenShell; no NVIDIA endorsement implied.</li>
						</ul>
					</div>
				</Section>
			</main>
		</Layout>
	);
}

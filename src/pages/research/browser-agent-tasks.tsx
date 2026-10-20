import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import Section from "../../components/editorial/section";
import Eyebrow from "../../components/editorial/eyebrow";
import Specimen from "../../components/editorial/specimen";
import PaperHeader from "../../components/work/paper-header";
import TaskNineteenPair from "../../components/work/task-nineteen-pair";
import {links, report, study, tasksDataset} from "@site/src/data/research";

const loadSnippet = `from datasets import load_dataset

tasks = load_dataset(
    "WootzappLab/browser-agent-tasks",
    split="train",
)`;

export default function BrowserAgentTasksPage() {
	const {sample} = tasksDataset;
	return (
		<Layout
			title={tasksDataset.name}
			description={`${tasksDataset.tasks} public-web browser-agent tasks across ${tasksDataset.sites} sites, each recorded twice: ${tasksDataset.screenshots} screenshots and ${tasksDataset.domStates} W8 DOM-model states.`}
		>
			<main className='ed-page'>
				<PaperHeader
					kind='Dataset'
					date='September 30, 2026'
					title={tasksDataset.name}
					subtitle='WootzappLab/browser-agent-tasks on Hugging Face'
					byline={report.byline}
					abstract={
						<>
							<p className='m-0'>
								{tasksDataset.tasks} multi-step public-web tasks, each with its paired recordings: the screenshot run and the W8 run of the same
								task, with final answers and agent logs. Each task states the instruction, a public starting page, when to stop, and what the
								agent must leave untouched.
							</p>
							<p className='m-0'>
								This is the data behind{" "}
								<Link to='/research/w8-domdiff-bench' className='ed-link'>
									{study.name}
								</Link>
								.
							</p>
						</>
					}
					stats={[
						{value: String(tasksDataset.tasks), label: "Tasks"},
						{value: String(tasksDataset.sites), label: "Distinct sites"},
						{value: String(tasksDataset.screenshots), label: "Screenshots (screenshot runs)"},
						{value: String(tasksDataset.domStates), label: "DOM-model states (W8 runs)"},
					]}
					sources={[{label: "Hugging Face", href: links.dataset}]}
				/>

				<Section tone='surface'>
					<div className='grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-20'>
						<div className='flex flex-col gap-5'>
							<Eyebrow>Layout</Eyebrow>
							<h2 className='ed-h3 m-0'>Task definitions, plus two recordings of every run.</h2>
							<p className='ed-body m-0 text-ed-graphite'>
								tasks.jsonl holds one task per line. Under trajectories/, each task has one folder per recording.
							</p>
						</div>
						<table className='ed-table'>
							<thead>
								<tr>
									<th>Path</th>
									<th>Contents</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td className='ed-mono text-[0.8125rem] text-ed-ink'>tasks.jsonl</td>
									<td>{tasksDataset.tasks} task definitions</td>
								</tr>
								{tasksDataset.runs.map((run) => (
									<tr key={run.folder}>
										<td className='ed-mono text-[0.8125rem] text-ed-ink'>trajectories/{run.folder}</td>
										<td className='ed-mono text-[0.8125rem] text-ed-graphite'>{run.files}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</Section>

				<Section>
					<div className='grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-20'>
						<div className='flex flex-col gap-5'>
							<Eyebrow>Task schema</Eyebrow>
							<h2 className='ed-h3 m-0'>Six fields per task.</h2>
						</div>
						<table className='ed-table'>
							<thead>
								<tr>
									<th>Field</th>
									<th className='hidden sm:table-cell'>Type</th>
									<th>Description</th>
								</tr>
							</thead>
							<tbody>
								{tasksDataset.fields.map((field) => (
									<tr key={field.name}>
										<td className='ed-mono text-[0.8125rem] text-ed-ink'>{field.name}</td>
										<td className='ed-mono hidden text-[0.8125rem] text-ed-smoke sm:table-cell'>{field.type}</td>
										<td>{field.description}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</Section>

				<Section tone='surface'>
					<div className='grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-20'>
						<div className='flex flex-col gap-5'>
							<Eyebrow>Example · {sample.task_id}</Eyebrow>
							<h2 className='ed-h3 m-0'>One task, both recordings.</h2>
							<p className='ed-body m-0 text-ed-graphite'>
								This is the &ldquo;exact release date&rdquo; example in Table 4 of the {study.name} report. The screenshot run shows a relative
								date; the W8 run keeps the exact timestamp.
							</p>
						</div>
						<div className='flex flex-col gap-4'>
							<Specimen title='tasks.jsonl' label={`Dataset row · ${sample.task_id}`} kind='recorded'>
								<pre className='m-0 whitespace-pre-wrap bg-transparent p-0 font-[inherit] text-[inherit]'>{JSON.stringify(sample, null, 2)}</pre>
							</Specimen>
							<TaskNineteenPair />
						</div>
					</div>
				</Section>

				<Section>
					<div className='grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20'>
						<div className='flex flex-col gap-5'>
							<Eyebrow>Load the tasks</Eyebrow>
							<pre className='ed-mono m-0 overflow-x-auto rounded-2xl border border-ed-rule bg-ed-surface p-6 text-[0.8125rem] leading-relaxed text-ed-ink'>
								{loadSnippet}
							</pre>
						</div>
						<div className='flex flex-col gap-5'>
							<Eyebrow>Scope</Eyebrow>
							<p className='m-0 text-[1rem] leading-relaxed text-ed-graphite'>
								Every task runs on the public web. Agents do not sign in, purchase, submit irreversible forms, or start navigation.
							</p>
						</div>
					</div>
				</Section>
			</main>
		</Layout>
	);
}

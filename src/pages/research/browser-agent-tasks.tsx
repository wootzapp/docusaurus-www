import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import Section from "../../components/editorial/section";
import Eyebrow from "../../components/editorial/eyebrow";
import Specimen from "../../components/editorial/specimen";
import PaperHeader from "../../components/work/paper-header";
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
			description={`${tasksDataset.tasks} multi-step public-web browser-agent tasks across ${tasksDataset.sites} sites, with instructions, stopping conditions, and scope constraints.`}
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
								Multi-step browser tasks for collecting agent trajectories and evaluating screenshot, DOM, and DOM-diff evidence. Each task
								states the instruction, a public starting page, when to stop, and what the agent must leave untouched.
							</p>
							<p className='m-0'>
								This is the task set behind{" "}
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
						{value: String(tasksDataset.categories), label: "Task categories"},
						{value: String(tasksDataset.fields.length), label: `Fields per task · ${tasksDataset.format}`},
					]}
					sources={[{label: "Hugging Face", href: links.dataset}]}
				/>

				<Section tone='surface'>
					<div className='grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-20'>
						<div className='flex flex-col gap-5'>
							<Eyebrow>Schema</Eyebrow>
							<h2 className='ed-h3 m-0'>One task definition per line of tasks.jsonl.</h2>
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

				<Section>
					<div className='grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-20'>
						<div className='flex flex-col gap-5'>
							<Eyebrow>Example record</Eyebrow>
							<h2 className='ed-h3 m-0'>{sample.task_id}</h2>
							<p className='ed-body m-0 text-ed-graphite'>
								This task produced the Task 2 evidence example in {study.name}: the screenshot record stopped before the developer and
								release-date fields, and the W8 record preserved both.
							</p>
							<Link to='/research/w8-domdiff-bench' className='ed-link w-fit text-[0.9375rem] font-medium'>
								See the Task 2 result →
							</Link>
						</div>
						<Specimen title='tasks.jsonl' label={`Dataset row · ${sample.task_id}`} kind='recorded'>
							<pre className='m-0 whitespace-pre-wrap bg-transparent p-0 font-[inherit] text-[inherit]'>{JSON.stringify(sample, null, 2)}</pre>
						</Specimen>
					</div>
				</Section>

				<Section tone='surface'>
					<div className='grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20'>
						<div className='flex flex-col gap-5'>
							<Eyebrow>Load it</Eyebrow>
							<pre className='ed-mono m-0 overflow-x-auto rounded-2xl border border-ed-rule bg-ed-canvas p-6 text-[0.8125rem] leading-relaxed text-ed-ink'>
								{loadSnippet}
							</pre>
						</div>
						<div className='flex flex-col gap-5'>
							<Eyebrow>Scope</Eyebrow>
							<ul className='m-0 flex list-none flex-col gap-3 p-0 text-[1rem] leading-relaxed text-ed-graphite'>
								<li>Every task runs on the public web. Agents do not sign in, purchase, submit irreversible forms, or start navigation.</li>
								<li>
									The planned trajectory export keeps the ordered actions, one observation after each meaningful action, the final answer, and
									the final browser state.
								</li>
							</ul>
						</div>
					</div>
				</Section>
			</main>
		</Layout>
	);
}

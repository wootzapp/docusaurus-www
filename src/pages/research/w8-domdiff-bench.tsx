import Layout from "@theme/Layout";
import ResearchPageContent from "../../components/research/sections";
import {study} from "@site/src/data/research";

export default function W8DomDiffBenchPage() {
	return (
		<Layout
			title={study.name}
			description={`${study.name}: a paired benchmark of browser evidence. Across ${study.tasks} browser-agent tasks and ${study.criteria} criteria, W8 DOM-diff Optimized had ${study.reduction} fewer criteria with missing source evidence than screenshot recordings.`}
		>
			<ResearchPageContent />
		</Layout>
	);
}

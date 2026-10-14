import Layout from "@theme/Layout";
import ResearchPageContent from "../components/research/sections";
import {study} from "@site/src/data/research";

export default function ResearchPage() {
	return (
		<Layout
			title='Research'
			description={`Published, reproducible WootzApp research. W8 DOM-diff Optimized had ${study.reduction} fewer criteria with missing source evidence than screenshot recordings across ${study.tasks} paired browser-agent tasks.`}
		>
			<ResearchPageContent />
		</Layout>
	);
}

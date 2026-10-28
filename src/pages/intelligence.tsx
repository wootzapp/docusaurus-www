import Layout from "@theme/Layout";
import IntelligenceHero from "../components/intelligence/hero";
import Contents from "../components/intelligence/contents";
import Proof from "../components/intelligence/proof";
import HowWeWork from "../components/intelligence/how-we-work";
import Compliance from "../components/intelligence/compliance";
import Ownership from "../components/intelligence/ownership";
import Workflows from "../components/intelligence/workflows";
import Security from "../components/intelligence/security";
import Questions from "../components/intelligence/questions";
import Closing from "../components/intelligence/closing";

// W8 Intelligence: the enterprise offer, laid out as a numbered brief.
export default function IntelligencePage() {
	return (
		<Layout
			title='W8 Intelligence'
			description='Custom small models trained on your own agent and expert work traces, recorded by the WootzApp hypervisor and W8 browser, built with an embedded team, governed by controls enforced outside the agent, and run inside your perimeter.'
		>
			<main className='ed-page intel'>
				<IntelligenceHero />
				<Contents />
				<Compliance />
				<HowWeWork />
				<Ownership />
				<Workflows />
				<Security />
				<Questions />
				<Proof />
				<Closing />
			</main>
		</Layout>
	);
}

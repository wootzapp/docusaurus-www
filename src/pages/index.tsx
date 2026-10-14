import Layout from "@theme/Layout";
import Hero from "../components/home/hero";
import Benchmark from "../components/home/benchmark";
import Technology from "../components/home/technology";
import BlindSpot from "../components/home/blind-spot";
import Learning from "../components/home/learning";
import Products from "../components/home/products";
import ResearchIndex from "../components/home/research-index";
import Faq from "../components/home/faq";
import FinalCta from "../components/home/final-cta";

export default function Home() {
	return (
		<Layout
			title="Optimize What Others Can't See"
			description='WootzApp builds RL environments for model labs and custom small models for enterprises from evidence captured below the agent harness, by an OpenShell-based hypervisor, and inside the browser, by W8.'
		>
			<main className='ed-page'>
				<Hero />
				<Products />
				<Benchmark />
				<Technology />
				<BlindSpot />
				<Learning />
				<ResearchIndex />
				<Faq />
				<FinalCta />
			</main>
		</Layout>
	);
}

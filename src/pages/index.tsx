import Layout from "@theme/Layout";
import Hero from "../components/home/hero";
import Benchmark from "../components/home/benchmark";
import Technology from "../components/home/technology";
import BlindSpot from "../components/home/blind-spot";
import Learning from "../components/home/learning";
import DeployPaths from "../components/home/deploy-paths";
import ResearchIndex from "../components/home/research-index";
import Faq from "../components/home/faq";
import FinalCta from "../components/home/final-cta";

export default function Home() {
	return (
		<Layout
			title="Optimize What Others Can't See"
			description='Train on what your agent executed. WootzApp combines an OpenShell-based agent observation layer with Chromium-native browser evidence for private post-training, real-world training datasets, and verified RL environments.'
		>
			<main className='ed-page'>
				<Hero />
				<Benchmark />
				<Technology />
				<BlindSpot />
				<Learning />
				<DeployPaths />
				<ResearchIndex />
				<Faq />
				<FinalCta />
			</main>
		</Layout>
	);
}

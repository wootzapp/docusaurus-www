import Layout from "@theme/Layout";
import Hero from "../components/home/hero";
import OurWork from "../components/home/our-work";
import Products from "../components/home/products";
import HowItWorks from "../components/home/how-it-works";
import BlindSpot from "../components/home/blind-spot";
import Technology from "../components/home/technology";
import Faq from "../components/home/faq";
import FinalCta from "../components/home/final-cta";

export default function Home() {
	return (
		<Layout
			title="The Hypervisor for RL"
			description='WootzApp is the hypervisor for RL. Our OpenShell-based hypervisor records agent and expert work below the harness, and W8, our Chromium browser engine, records full page state. Our team turns both into datasets, evals, and RL environments for frontier model labs, and custom small models for enterprises.'
		>
			<main className='ed-page'>
				<Hero />
				<OurWork />
				<Products />
				<HowItWorks />
				<BlindSpot />
				<Technology />
				<Faq />
				<FinalCta />
			</main>
		</Layout>
	);
}

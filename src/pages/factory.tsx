import Layout from "@theme/Layout";
import FactoryHero from "../components/factory/FactoryHero";
import ShellFoundation from "../components/factory/ShellFoundation";
import GatewayTraining from "../components/factory/GatewayTraining";
import FactoryResearch from "../components/factory/FactoryResearch";
import FactoryPilot from "../components/factory/FactoryPilot";
import styles from "../components/factory/Factory.module.css";

export default function FactoryPage() {
	return (
		<Layout
			title='Factory — Openrind Shell & Continual Learning'
			description='Execution architecture and learning method: Openrind Shell combines Desktop VM execution, persistent project state, and session-scoped model-context capture with recorded-session RFT + OPSD.'
		>
			<main className={`ed-page ${styles.page}`}>
				<FactoryHero />
				<ShellFoundation />
				<GatewayTraining />
				<FactoryResearch />
				<FactoryPilot />
			</main>
		</Layout>
	);
}

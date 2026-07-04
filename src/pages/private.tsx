import Head from "@docusaurus/Head";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import PrivatePageContent from "../components/private/sections";

export default function PrivatePage() {
	const {siteConfig} = useDocusaurusContext();

	return (
		<Layout
			title={`Private Data Collaborations | ${siteConfig.title}`}
			description='Turn private codebases and enterprise workflows into AI-ready W8-RL assets with sanitization, verification, and documentation attached.'
		>
			<Head>
				<meta name='robots' content='noindex,nofollow' />
				<meta name='googlebot' content='noindex,nofollow' />
			</Head>
			<PrivatePageContent />
		</Layout>
	);
}

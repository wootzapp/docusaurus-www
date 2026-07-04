import Head from "@docusaurus/Head";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import PrivatePageContent from "../components/private/sections";

export default function PrivatePage() {
	const {siteConfig} = useDocusaurusContext();

	return (
		<Layout
			title={`Private Data Collaborations | ${siteConfig.title}`}
			description='WootzApp licenses private codebases and enterprise workflows to build defensible W8-RL environments for coding and computer-use models.'
		>
			<Head>
				<meta name='robots' content='noindex,nofollow' />
				<meta name='googlebot' content='noindex,nofollow' />
			</Head>
			<PrivatePageContent />
		</Layout>
	);
}

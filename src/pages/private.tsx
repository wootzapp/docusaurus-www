import Head from "@docusaurus/Head";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import PrivatePageContent from "../components/private/sections";

export default function PrivatePage() {
	const {siteConfig} = useDocusaurusContext();

	return (
		<Layout
			title={`Private Codebase Licensing | ${siteConfig.title}`}
			description='WootzApp specializes in India-scale private legacy codebases, using FDRL teams to turn them into W8-RL environments.'
		>
			<Head>
				<meta name='robots' content='noindex,nofollow' />
				<meta name='googlebot' content='noindex,nofollow' />
			</Head>
			<PrivatePageContent />
		</Layout>
	);
}

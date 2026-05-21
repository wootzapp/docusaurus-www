import Head from "@docusaurus/Head";
import GoPageContent from "../components/go/sections";

export default function GoPage() {
	return (
		<>
			<Head>
				<title>WootzApp Go</title>
				<meta
					name='description'
					content='WootzApp builds secretive RL environments for foundational model labs.'
				/>
				<meta property='og:title' content='WootzApp Go' />
				<meta
					property='og:description'
					content='Foundation Model Labs use WootzApp for their most secretive RL Environments.'
				/>
			</Head>
			<GoPageContent />
		</>
	);
}

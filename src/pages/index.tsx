import Layout from "@theme/Layout";
import {Browsing} from "../components/app/browsing";
import {Experience} from "../components/app/experience";
import {Footer} from "../components/app/footer";
import {Header} from "../components/app/header";
import Hero from "../components/app/hero";
import BrowserPlatform from "../components/app/browser-platform";
import {Integration} from "../components/app/integration";
import {Intersection} from "../components/app/intersection";
import {BeyondDesign} from "../components/app/beyond-design";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import WootzBrowser from "../components/app/wootz-browser";

export default function Home() {
	const {siteConfig} = useDocusaurusContext();
	return (
		<Layout title={`${siteConfig.title}`} description={`${siteConfig.tagline}`}>
			<div className='-mt-[64px] flex flex-col'>
				<Hero />
				<WootzBrowser />
					<Browsing />
					<BeyondDesign />
					<BrowserPlatform />
					<Integration />
				<Intersection />
				<Experience />
			</div>
		</Layout>
	);
}

import Layout from "@theme/Layout";
import {Benefits} from "../components/app/benefits";
import {Browsing} from "../components/app/browsing";
import {Experience} from "../components/app/experience";
import {Footer} from "../components/app/footer";
import {Header} from "../components/app/header";
import Hero from "../components/app/hero";
import {Intersection} from "../components/app/intersection";
import {PartnerShip} from "../components/app/partnership";
import {Performance} from "../components/app/performance";
import {SectionImg} from "../components/app/section-img";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function Home() {
	const {siteConfig} = useDocusaurusContext();
	return (
		<Layout title={`${siteConfig.title}`} description={`${siteConfig.tagline}`}>
			<div className='-mt-[64px] flex flex-col'>
				<Hero />
				<Browsing />
				<Performance />
				<SectionImg />
				<PartnerShip />
				<Benefits />
				<Intersection />
				<Experience />
			</div>
		</Layout>
	);
}

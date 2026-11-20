import React from "react";
import Layout from "@theme/Layout";
import FactoryHero from "../components/factory/hero";
import Problem from "../components/factory/problem";
import Workspace from "../components/factory/workspace";
import Ctf from "../components/factory/ctf";
import Training from "../components/factory/training";
import Published from "../components/factory/published";
import FactoryClose from "../components/factory/close";
import {meta} from "../components/factory/copy";

export default function FactoryPage() {
	return (
		<Layout
			title={meta.title}
			description={meta.description}
		>
			<main className='ed-page factory'>
				<FactoryHero />
				<Problem />
				<Published />
				<Workspace />
				<Ctf />
				<Training />
				<FactoryClose />
			</main>
		</Layout>
	);
}

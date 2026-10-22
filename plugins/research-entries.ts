import type {Plugin} from "@docusaurus/types";

// /research is a second blog instance (see docusaurus.config.ts). This plugin publishes its entries as global data so
// the homepage can list them through useResearchEntries() in src/components/work/entries.ts.
export type ResearchEntryData = {
	permalink: string;
	title: string;
	date: string;
	description: string;
	frontMatter: Record<string, unknown>;
};

type BlogPostLike = {
	metadata: {
		permalink: string;
		title: string;
		date: string | Date;
		description: string;
		unlisted?: boolean;
		frontMatter: Record<string, unknown>;
	};
};

export default function researchEntriesPlugin(): Plugin {
	return {
		name: "research-entries",
		allContentLoaded({allContent, actions}) {
			const instances = allContent["docusaurus-plugin-content-blog"] as Record<string, {blogPosts?: BlogPostLike[]} | undefined> | undefined;
			const posts = instances?.research?.blogPosts ?? [];
			const entries: ResearchEntryData[] = posts
				.filter((post) => !post.metadata.unlisted)
				.map((post) => ({
					permalink: post.metadata.permalink,
					title: post.metadata.title,
					date: new Date(post.metadata.date).toISOString(),
					description: post.metadata.description,
					frontMatter: post.metadata.frontMatter,
				}));
			actions.setGlobalData({entries});
		},
	};
}

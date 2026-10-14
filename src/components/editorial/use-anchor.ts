import useBrokenLinks from "@docusaurus/useBrokenLinks";

// Registers a plain element id with Docusaurus' broken-anchor checker.
export default function useAnchor(id?: string): string | undefined {
	const brokenLinks = useBrokenLinks();
	if (id) {
		brokenLinks.collectAnchor(id);
	}
	return id;
}

---
# Copy this file to research/<slug>.md and fill it in. Files whose name starts with "_" are ignored by the build.
# Entries are listed newest first on /research and in "Our work" on the homepage. No code changes are needed.
title: Title of the work
slug: title-of-the-work           # URL: /research/<slug>
date: 2026-01-01                  # Orders the list. Shown as "Jan 2026" in lists and "January 1, 2026" on the page.
# dateLabel: January 2026         # Optional: what the page header shows instead of the full date.
# hideDate: true                  # Optional: show no date.
kind: Preprint                    # Label above the title: Preprint, Benchmark, Dataset, Open-source runtime, …
description: One sentence for the list row and the search snippet.
subtitle: The line under the title on the page (a venue, a repository, a question).
byline: WootzApp Research
abstract: |
  Paragraphs of plain text, separated by blank lines. Shown under the byline, above the stats.
stats:                            # Up to four headline figures. The first two make the default thumbnail.
  - value: "100"
    label: What the figure counts
sources:                          # Pill links under the abstract.
  - label: Repository
    href: https://github.com/wootzapp/...
result: The one-line result on the right of the list row
facts: [Three, short, chips]
# thumbnail: /img/research/example.png   # Optional: an image under /static, or a built-in name: bench, tasks, shell, ledt.
# citation: |                     # Optional BibTeX; rendered with a copy button at the end of the page.
#   @misc{key, title = {...}}
---

## First section

Plain Markdown: headings (they become the Contents list), paragraphs, lists, tables, images, code blocks and `:::note[Title]` admonitions.
These components also work without an import:

<EvidenceBars
  max={10}
  ticks={[0, 5, 10]}
  rows={[
    {label: "Baseline", value: 3, display: "3"},
    {label: "Ours", value: 9, display: "9", accent: true},
  ]}
  caption='Exhibit 1 — Bars on a shared axis.'
/>

| Column | Value |
| :--- | ---: |
| Row | 1 |

<Caption>Exhibit 2 — A caption under a table or figure.</Caption>

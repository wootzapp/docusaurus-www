import {themes as prismThemes} from "prism-react-renderer";
import type {Config} from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// Code highlighting in the site palette: ink for code, smoke for comments and punctuation, accent for strings.
const codeTheme = {
  plain: {color: "#131315", backgroundColor: "#e9e7e3"},
  styles: [
    {types: ["comment", "prolog", "doctype", "cdata"], style: {color: "#4f4f53", fontStyle: "italic" as const}},
    {types: ["punctuation", "operator"], style: {color: "#4f4f53"}},
    {types: ["string", "char", "attr-value", "inserted"], style: {color: "#8a3f0e"}},
    {types: ["keyword", "tag", "selector", "builtin", "boolean"], style: {color: "#131315", fontWeight: "500" as const}},
    {types: ["function", "class-name", "attr-name", "property", "variable", "number", "constant", "symbol"], style: {color: "#131315"}},
    {types: ["deleted"], style: {color: "#8a3f0e", textDecorationLine: "line-through" as const}},
  ],
};

const config: Config = {
  title: "Wootzapp",
  tagline: "The hypervisor for RL.",
  favicon: "/img/favicon.ico",


// Set the production url of your site here
url: "https://www.wootzapp.com",

// Set the /<baseUrl>/ pathname under which your site is served
// For GitHub pages deployment, it is often '/<projectName>/'
//baseUrl: "/docusaurus-www/",
baseUrl: "/",

  organizationName: "wootzapp", // Usually your GitHub org/user name.
  projectName: "docusaurus-www", // Usually your repo name.

  onBrokenLinks: "throw",

  stylesheets: [
    {
      href: "https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400..700&family=JetBrains+Mono:wght@400;500&display=swap",
      type: "text/css",
    },
  ],
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
		  remarkPlugins: [],
          rehypePlugins: [],
          beforeDefaultRemarkPlugins: [],
          beforeDefaultRehypePlugins: [],
          // Remove or change this URL to customize the "edit this page" link.
         // editUrl: 
            //"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          blogTitle: "Blog",
          blogDescription: "Notes on traces, evidence, and training data.",
          blogSidebarTitle: "Recent posts",
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Remove or change this URL to customize the "edit this page" link.
          // editUrl: 
           // "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          {
            to: "/docs/important/privacy",
            from: ["/privacy"],
          },
        ],
      },
    ],
  ],

  themeConfig: {
    image: "/img/og_wootzapp.png",
    colorMode: {
      defaultMode: "light",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    metadata: [
    // 1) Standard meta description
    {
      content: 'WootzApp is the hypervisor for RL. A model proxy records what the model said; our OpenShell-based hypervisor records what the agent did below the harness, and W8, our Chromium browser engine, records the full page. Our team turns both into datasets, evals, and RL environments for frontier model labs, and custom small models for enterprises.',
    },
    // 2) Open Graph description (used by Telegram, Facebook, LinkedIn…)
    {
      property: 'og:description',
      content: 'WootzApp is the hypervisor for RL. A model proxy records what the model said; our OpenShell-based hypervisor records what the agent did below the harness, and W8, our Chromium browser engine, records the full page. Our team turns both into datasets, evals, and RL environments for frontier model labs, and custom small models for enterprises.',
    },
    // 3) Twitter Card description
    {
      name: 'twitter:description',
      content: 'WootzApp is the hypervisor for RL. A model proxy records what the model said; our OpenShell-based hypervisor records what the agent did below the harness, and W8, our Chromium browser engine, records the full page. Our team turns both into datasets, evals, and RL environments for frontier model labs, and custom small models for enterprises.',
    },
    // (you can still leave twitter:card or override it to “summary_large_image”)
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
  ],
    navbar: {
      title: "WootzApp",
      logo: {
        alt: "WootzApp",
        src: "/img/fav.png",
      },
      items: [
        { to: "/#model-labs", label: "Data & Environments", position: "left", activeBaseRegex: "^$" },
        { to: "/#enterprise", label: "Enterprise Models", position: "left", activeBaseRegex: "^$" },
        { to: "/#technology", label: "Technology", position: "left", activeBaseRegex: "^$" },
        { to: "/research", label: "Research", position: "left" },
        { to: "/docs", label: "Docs", position: "left" },
      ],
    },
    prism: {
      theme: codeTheme,
      darkTheme: codeTheme,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

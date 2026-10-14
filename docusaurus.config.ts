import {themes as prismThemes} from "prism-react-renderer";
import type {Config} from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Wootzapp",
  tagline: "Optimize what others can't see.",
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
      href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=Inter:opsz,wght@14..32,400..700&display=swap",
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
      content: 'Train on what your agent executed. WootzApp combines an OpenShell-based agent observation layer with Chromium-native browser evidence for private post-training, real-world training datasets, and verified RL environments.',
    },
    // 2) Open Graph description (used by Telegram, Facebook, LinkedIn…)
    {
      property: 'og:description',
      content: 'Train on what your agent executed. WootzApp combines an OpenShell-based agent observation layer with Chromium-native browser evidence for private post-training, real-world training datasets, and verified RL environments.',
    },
    // 3) Twitter Card description
    {
      name: 'twitter:description',
      content: 'Train on what your agent executed. WootzApp combines an OpenShell-based agent observation layer with Chromium-native browser evidence for private post-training, real-world training datasets, and verified RL environments.',
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
        { to: "/#technology", label: "Technology", position: "left", activeBaseRegex: "^$" },
        { to: "/research", label: "Research", position: "left" },
        { to: "/#enterprise", label: "For Enterprises", position: "left", activeBaseRegex: "^$" },
        { to: "/#model-labs", label: "For Model Labs", position: "left", activeBaseRegex: "^$" },
        { to: "/docs/intro", label: "Docs", position: "left" },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "X",
              href: "https://x.com/docusaurus",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/facebook/docusaurus",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'W8-RL',
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Getting Started',
          items: [
            'getting-started/prereqs',
            'getting-started/build',
            'getting-started/quickstart',
          ],
        },
        {
          type: 'category',
          label: 'Guides',
          items: [
            'guides/design2code',
            'guides/swebench',
            'guides/tinker-training',
            'guides/outputs',
          ],
        },
        {
          type: 'category',
          label: 'Compatibility',
          items: [
            'compatibility/skyrl',
            'compatibility/openenv',
            'compatibility/tinker',
          ],
        },
        {
          type: 'category',
          label: 'Architecture',
          items: [
            'architecture/overview',
            'architecture/rollout',
            'architecture/emulator-and-rewards',
          ],
        },
        {
          type: 'category',
          label: 'Rewards',
          items: [
            'rewards/chromiumrl',
            'rewards/design2code',
          ],
        },
        {
          type: 'category',
          label: 'Operations',
          items: [
            'operations/troubleshooting',
            'operations/avd-caching',
            'operations/ci-and-lints',
          ],
        },
        {
          type: 'category',
          label: 'Reference',
          items: [
            'reference/cli',
            'reference/envvars',
            'reference/files',
            'reference/glossary',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Important',
      collapsible: true,
      collapsed: false,
      items: ['important/privacy'],
    },
  ],
};

export default sidebars;

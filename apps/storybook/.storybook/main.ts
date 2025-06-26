import type { StorybookConfig } from '@storybook/sveltekit';

const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|ts|svelte)'],
	addons: [
		'@storybook/addon-svelte-csf',
		'@chromatic-com/storybook',
		'@storybook/addon-docs',
		'@storybook/addon-a11y',
		'@storybook/addon-vitest'
	],
	framework: {
		name: '@storybook/sveltekit',
		options: {}
	},
	viteFinal: async (config) => {
		// Dynamically import Tailwind Vite plugin for v4 compatibility
		const { default: tailwindcss } = await import('@tailwindcss/vite');
		config.plugins = config.plugins || [];
		config.plugins.push(tailwindcss());
		return config;
	}
};

export default config;

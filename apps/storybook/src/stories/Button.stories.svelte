<script module lang="ts">
	import { Button } from '@some-org/ui';
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { fn } from 'storybook/test';

	// Type definition for Storybook args
	type StoryArgs = {
		variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive';
		size?: 'sm' | 'md' | 'lg';
		disabled?: boolean;
		type?: 'button' | 'submit' | 'reset';
		onclick?: (event: MouseEvent) => void;
		label?: string;
	};

	const { Story } = defineMeta({
		title: 'Button',
		component: Button,
		tags: ['autodocs'],
		args: {
			variant: 'primary',
			size: 'md',
			disabled: false,
			type: 'button',
			onclick: fn()
		},
		argTypes: {
			variant: {
				control: { type: 'select' },
				options: ['primary', 'secondary', 'outline', 'ghost', 'destructive']
			},
			size: {
				control: { type: 'select' },
				options: ['sm', 'md', 'lg']
			},
			disabled: { control: 'boolean' },
			type: {
				control: { type: 'select' },
				options: ['button', 'submit', 'reset']
			}
		},
		render: template
	});
</script>

{#snippet template(args: StoryArgs)}
	<Button variant={args.variant} size={args.size} disabled={args.disabled} type={args.type} onclick={args.onclick}>
		{#snippet children()}{args.label || 'Button'}{/snippet}
	</Button>
{/snippet}

<Story name="Primary" args={{ variant: 'primary', label: 'Primary Button' }} />

<Story name="Secondary" args={{ variant: 'secondary', label: 'Secondary Button' }} />

<Story name="Outline" args={{ variant: 'outline', label: 'Outline Button' }} />

<Story name="Ghost" args={{ variant: 'ghost', label: 'Ghost Button' }} />

<Story name="Destructive" args={{ variant: 'destructive', label: 'Destructive Button' }} />

<Story name="Small" args={{ size: 'sm', label: 'Small Button' }} />

<Story name="Medium" args={{ size: 'md', label: 'Medium Button' }} />

<Story name="Large" args={{ size: 'lg', label: 'Large Button' }} />

<Story name="Disabled" args={{ disabled: true, label: 'Disabled Button' }} />

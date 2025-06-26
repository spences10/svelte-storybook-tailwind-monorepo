<script module>
	import { Button } from '@some-org/ui';
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { fn } from 'storybook/test';

	const { Story } = defineMeta({
		title: 'Button',
		component: Button,
		tags: ['autodocs'],
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
		args: {
			onclick: fn()
		}
	});
</script>

<Story name="Primary" args={{ variant: 'primary' }}>
	<Button variant="primary">
		{#snippet children()}Primary Button{/snippet}
	</Button>
</Story>

<Story name="Secondary" args={{ variant: 'secondary' }}>
	<Button variant="secondary">
		{#snippet children()}Secondary Button{/snippet}
	</Button>
</Story>

<Story name="Outline" args={{ variant: 'outline' }}>
	<Button variant="outline">
		{#snippet children()}Outline Button{/snippet}
	</Button>
</Story>

<Story name="Ghost" args={{ variant: 'ghost' }}>
	<Button variant="ghost">
		{#snippet children()}Ghost Button{/snippet}
	</Button>
</Story>

<Story name="Destructive" args={{ variant: 'destructive' }}>
	<Button variant="destructive">
		{#snippet children()}Destructive Button{/snippet}
	</Button>
</Story>

<Story name="Small" args={{ size: 'sm' }}>
	<Button size="sm">
		{#snippet children()}Small Button{/snippet}
	</Button>
</Story>

<Story name="Medium" args={{ size: 'md' }}>
	<Button size="md">
		{#snippet children()}Medium Button{/snippet}
	</Button>
</Story>

<Story name="Large" args={{ size: 'lg' }}>
	<Button size="lg">
		{#snippet children()}Large Button{/snippet}
	</Button>
</Story>

<Story name="Disabled" args={{ disabled: true }}>
	<Button disabled={true}>
		{#snippet children()}Disabled Button{/snippet}
	</Button>
</Story>

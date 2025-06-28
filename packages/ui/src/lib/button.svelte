<script lang="ts">
	interface Props {
		variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive';
		size?: 'sm' | 'md' | 'lg';
		disabled?: boolean;
		type?: 'button' | 'submit' | 'reset';
		onclick?: (event: MouseEvent) => void;
		children: import('svelte').Snippet;
	}

	let {
		variant = 'primary',
		size = 'md',
		disabled = false,
		type = 'button',
		onclick,
		children,
		...restProps
	}: Props = $props();

	const base_classes =
		'inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';

	const variant_classes = {
		primary: 'bg-brand-600 text-white hover:bg-brand-700 active:bg-brand-800',
		secondary: 'bg-brand-100 text-brand-900 hover:bg-brand-200 active:bg-brand-300',
		outline:
			'border border-brand-300 bg-transparent text-brand-700 hover:bg-brand-50 hover:text-brand-800 active:bg-brand-100',
		ghost:
			'bg-transparent text-brand-700 hover:bg-brand-100 hover:text-brand-800 active:bg-brand-200',
		destructive: 'bg-red-600 text-white hover:bg-red-700 active:bg-red-800'
	};

	const size_classes = {
		sm: 'h-9 px-3 text-sm rounded-md',
		md: 'h-10 px-4 py-2 rounded-lg',
		lg: 'h-11 px-8 rounded-lg text-lg'
	};

	const classes = $derived(`${base_classes} ${variant_classes[variant]} ${size_classes[size]}`);
</script>

<button {type} {disabled} {onclick} class={classes} {...restProps}>
	{@render children()}
</button>

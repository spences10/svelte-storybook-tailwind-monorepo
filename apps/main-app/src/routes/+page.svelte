<script lang="ts">
	import { Button } from '@some-org/ui';
</script>

<h1>Main App - Button Showcase</h1>

<div class="space-y-8 p-8">
	<section>
		<h2 class="mb-4 text-2xl font-bold">Primary Buttons</h2>
		<div class="flex items-center gap-4">
			<Button variant="primary" size="sm">
				{#snippet children()}Small{/snippet}
			</Button>
			<Button variant="primary" size="md">
				{#snippet children()}Medium{/snippet}
			</Button>
			<Button variant="primary" size="lg">
				{#snippet children()}Large{/snippet}
			</Button>
		</div>
	</section>

	<section>
		<h2 class="mb-4 text-2xl font-bold">Secondary Buttons</h2>
		<div class="flex items-center gap-4">
			<Button variant="secondary" size="sm">
				{#snippet children()}Small{/snippet}
			</Button>
			<Button variant="secondary" size="md">
				{#snippet children()}Medium{/snippet}
			</Button>
			<Button variant="secondary" size="lg">
				{#snippet children()}Large{/snippet}
			</Button>
		</div>
	</section>

	<section>
		<h2 class="mb-4 text-2xl font-bold">Outline Buttons</h2>
		<div class="flex items-center gap-4">
			<Button variant="outline" size="sm">
				{#snippet children()}Small{/snippet}
			</Button>
			<Button variant="outline" size="md">
				{#snippet children()}Medium{/snippet}
			</Button>
			<Button variant="outline" size="lg">
				{#snippet children()}Large{/snippet}
			</Button>
		</div>
	</section>

	<section>
		<h2 class="mb-4 text-2xl font-bold">Ghost Buttons</h2>
		<div class="flex items-center gap-4">
			<Button variant="ghost" size="sm">
				{#snippet children()}Small{/snippet}
			</Button>
			<Button variant="ghost" size="md">
				{#snippet children()}Medium{/snippet}
			</Button>
			<Button variant="ghost" size="lg">
				{#snippet children()}Large{/snippet}
			</Button>
		</div>
	</section>

	<section>
		<h2 class="mb-4 text-2xl font-bold">Destructive Buttons</h2>
		<div class="flex items-center gap-4">
			<Button variant="destructive" size="sm">
				{#snippet children()}Delete{/snippet}
			</Button>
			<Button variant="destructive" size="md">
				{#snippet children()}Delete{/snippet}
			</Button>
			<Button variant="destructive" size="lg">
				{#snippet children()}Delete{/snippet}
			</Button>
		</div>
	</section>

	<section>
		<h2 class="mb-4 text-2xl font-bold">Disabled State</h2>
		<div class="flex items-center gap-4">
			<Button variant="primary" disabled>
				{#snippet children()}Disabled Primary{/snippet}
			</Button>
			<Button variant="secondary" disabled>
				{#snippet children()}Disabled Secondary{/snippet}
			</Button>
			<Button variant="outline" disabled>
				{#snippet children()}Disabled Outline{/snippet}
			</Button>
		</div>
	</section>
</div>

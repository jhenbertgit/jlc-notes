<script lang="ts">
	import type { PageData } from './$types';
	import dateFormatter from '@jhenbert/date-formatter';

	export let data: PageData;

	const date = dateFormatter(
		'en-PH',
		{ year: 'numeric', month: 'long', day: 'numeric' },
		new Date(data.meta.date)
	);
</script>

<div class="max-w-7xl mx-auto px-4 mb-8 sm:px-6 lg:px-8">
	<div class="max-w-3xl mx-auto min-h-screen">
		<!-- Note header -->
		<div class="py-8">
			<p class="text-tertiary-500">Professor: <span>{data.meta.professor}</span></p>
			<p class="text-tertiary-500 text-sm">Date Lectured: <span>{date}</span></p>
		</div>

		<!-- Note content -->
		<div
			class="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto prose-h1:text-primary-50 prose-h2:text-primary-50 prose-h3:text-primary-50 prose-strong:text-primary-50"
		>
			<svelte:component this={data.content} />
		</div>
	</div>
</div>

<style>
	.prose {
		color: var(--primary-50) !important;
	}
</style>

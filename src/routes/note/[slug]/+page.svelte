<script lang="ts">
	import { route } from '$lib/ROUTES';
	import { onDestroy } from 'svelte';
	import type { PageData } from './$types';
	import dateFormatter from '@jhenbert/date-formatter';

	export let data: PageData;

	const date = dateFormatter(
		'en-PH',
		{ year: 'numeric', month: 'long', day: 'numeric' },
		new Date(data.meta.date)
	);

	const resetTitle = () => {
		document.title = 'My Personal Notes - NHQ-NSU PTC PSJLC Batch 2024-01 CL Juliet';
	};

	onDestroy(resetTitle);
</script>

<svelte:head>
	<title>My Personal Notes - {data.meta.subject}</title>
</svelte:head>

<div class="max-w-7xl mx-auto px-4 mb-8 sm:px-6 lg:px-8">
	<div class="max-w-3xl mx-auto min-h-screen">
		<!--breadcrumb-->
		<ol class="breadcrumb py-4">
			<li class="crumb"><a class="anchor" href={route('/')}>Home</a></li>
		</ol>

		<!-- header -->
		<div class="pb-8">
			<p class="text-tertiary-500">Professor: <span>{data.meta.professor}</span></p>
			<p class="text-tertiary-500 text-sm">Date Lectured: <span>{date}</span></p>
		</div>

		<!-- content -->
		<div
			class="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto prose-h1:text-primary-50 prose-h2:text-surface-100 prose-h3:text-surface-100 prose-strong:text-surface-100"
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

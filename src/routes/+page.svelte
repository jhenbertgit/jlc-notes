<script lang="ts">
	import { route } from '$lib/ROUTES';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<main class="container mx-auto mt-8">
	<div class="flex flex-wrap justify-between">
		<div class="w-full md:w-8/12 px-4 mb-8">
			<img
				src="https://via.placeholder.com/1200x600"
				alt="placeholder"
				class="w-full h-64 object-cover rounded"
			/>
			<h2 class="text-4xl font-bold mt-4 mb-2">PSJLC Batch 2024-01 Notes</h2>
			<p class="text-primary-50 mb-4">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat.
			</p>
			<p class="text-primary-50 mb-4">
				Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
				pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
				mollit anim id est laborum.
			</p>
		</div>
		<div class="w-full md:w-4/12 px-4 mb-8">
			<div class="bg-surface-100 px-4 py-6 rounded">
				<h3 class="h3 text-primary-700 mb-2">Subjects</h3>
				<ul class="list list-inside">
					{#each data.notes as note}
						<li>
							<a href={route('/[slug]', { slug: note.slug })} class="anchor">{note.subject}</a>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</main>

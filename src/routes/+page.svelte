<script lang="ts">
	import { route } from '$lib/ROUTES';
	import type { PageData } from './$types';
	import img from '$lib/image/jlc-note.png';

	export let data: PageData;
</script>

<main class="container mx-auto mt-8">
	<div class="flex flex-wrap justify-between min-h-screen">
		<div class="w-full md:w-8/12 px-4 mb-8">
			<img src={img} alt="hero-img" class="w-full h-[350px] object-cover rounded border-2" />
			<h2 class="h2 mt-4 mb-2">PSJLC Batch 2024-01 Personal Notes</h2>
			<h5 class="h5">⚠️Disclaimer:</h5>
			<p class=" text-justify mb-4">
				These notes are intended solely for personal use and reference. They represent personal
				interpretations, summaries, and reflections on the topics discussed. The information
				contained within may not be complete, accurate, or up-to-date. Any reliance on the material
				is at your own risk.
			</p>
			<p class="text-justify mb-4">
				The notes do not constitute professional advice, and they should not be used as a substitute
				for professional consultation. Any references to external sources, publications, or other
				materials are for informational purposes only and do not imply endorsement or verification
				of the content.
			</p>
			<p class="text-justify">
				The author is not responsible for any errors, omissions, or outcomes resulting from the use
				of these notes. Always consult appropriate sources and professionals for accurate and
				reliable information.
			</p>
		</div>
		<div class="w-full md:w-4/12 px-4 mb-8">
			<div class="bg-surface-100 px-4 py-6 rounded">
				<h3 class="h3 text-secondary-700 mb-2">Subjects</h3>
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

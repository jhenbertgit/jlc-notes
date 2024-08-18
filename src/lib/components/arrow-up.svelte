<script lang="ts">
	import Icon from '@iconify/svelte';
	import { onDestroy, onMount } from 'svelte';

	let isVisible = false;

	const handleScroll = () => {
		isVisible = window.scrollY > 300;
	};

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	onMount(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener('scroll', handleScroll);
		}
	});

	onDestroy(() => {
		if (typeof window !== 'undefined') {
			window.removeEventListener('scroll', handleScroll);
		}
	});
</script>

{#if isVisible}
	<button
		class="btn btn-icon hover:variant-soft-primary fixed z-50 bottom-10 right-10"
		on:click={scrollToTop}
	>
		<Icon icon="iconamoon:arrow-up-5-circle-bold" width="48" height="48" />
		<span class="sr-only">Go to top</span>
	</button>
{/if}

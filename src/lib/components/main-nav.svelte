<script>
	import { route } from '$lib/ROUTES';
	import { page } from '$app/stores';
</script>

<nav class="bg-surface-800 py-4">
	<div class="container mx-auto flex justify-between items-center px-4">
		<h2 class="h2">Notes</h2>
		{#if $page.url.pathname === route('/') || $page.url.pathname === route('/about')}
			<ul class="list-nav flex">
				{#if $page.url.pathname !== route('/')}
					<li><a href={route('/')} class="hover:text-secondary-500">Home</a></li>
				{/if}
				{#if $page.url.pathname !== route('/about')}
					<li><a href={route('/about')} class="hover:text-secondary-500">About</a></li>
				{/if}
			</ul>
		{/if}
	</div>
</nav>

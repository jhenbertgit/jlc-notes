<script>
	import { route } from '$lib/ROUTES';
</script>

<nav class="bg-surface-800 py-4">
	<div class="container mx-auto flex justify-between items-center px-4">
		<h2 class="h2"><a href={route('/')} class="hover:text-secondary-500">Notes</a></h2>
		<a href={route('/about')} class="hover:text-secondary-500">About</a>
	</div>
</nav>

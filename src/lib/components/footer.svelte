<script>
	import { route } from '$lib/ROUTES';
</script>

<footer class="bg-tertiary-700 py-4 text-surface-100">
	<div class="container mx-auto px-4">
		<div class="-mx-4 flex flex-wrap justify-between space-y-1">
			<div class="px-4 w-full text-center sm:w-auto sm:text-left">
				Copyright &copy; {new Date().getFullYear()} . All Rights Reserved.
			</div>
			<div class="px-4 w-full text-center sm:w-auto sm:text-left">
				<a class="anchor !text-surface-100 no-underline" href={route('developer')} target="_blank"
					>Made with❤️</a
				>
			</div>
		</div>
	</div>
</footer>

import { route } from '$lib/ROUTES';
import type { PageServerLoad } from './$types';

export const load = (async ({ fetch }) => {
	const response = await fetch(route('GET /api/notes'));
	const notes: Note[] = await response.json();

	return { notes };
}) satisfies PageServerLoad;

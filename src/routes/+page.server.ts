import { route } from '$lib/ROUTES';
import type { PageServerLoad } from './$types';

export const load = (async ({ fetch }) => {
	const responseNotes = await fetch(route('GET /api/notes'));
	const notes: Note[] = await responseNotes.json();

	const responseExams = await fetch(route('GET /api/reviewers'));
	const reviewers: Reviewer[] = await responseExams.json();

	return { notes, reviewers };
}) satisfies PageServerLoad;

import { route } from '$lib/ROUTES';
import type { PageServerLoad } from './$types';

export const load = (async ({ fetch }) => {
	const responseNotes = await fetch(route('GET /api/notes'));
	const notes: Note[] = await responseNotes.json();

	const responseExams = await fetch(route('GET /api/exams'));
	const exams: Exam[] = await responseExams.json();

	return { notes, exams };
}) satisfies PageServerLoad;

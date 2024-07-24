import { json } from '@sveltejs/kit';

const getNotes = async () => {
	let notes: Note[] = [];

	const paths = import.meta.glob('/src/notes/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Note, 'slug>'>;
			const note = { ...metadata, slug } satisfies Note;
			notes.push(note);
		}
	}

	// sort from oldest to newest
	notes = notes.sort(
		(first, second) => new Date(first.date).getTime() - new Date(second.date).getTime()
	);

	return notes;
};

export const GET = async () => {
	const notes = await getNotes();
	return json(notes);
};

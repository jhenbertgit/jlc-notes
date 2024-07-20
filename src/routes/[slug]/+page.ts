import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
	try {
		const note = await import(`../../notes/${params.slug}.md`);

		return {
			content: note.default,
			meta: note.metadata
		};
	} catch (e) {
		console.error(e);
		throw error(404, `Could not find ${params.slug}`);
	}
}) satisfies PageLoad;

import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
	try {
		const exam = await import(`../../../reviewers/${params.slug}.md`);

		return {
			content: exam.default,
			meta: exam.metadata
		};
	} catch (e) {
		console.error(e);
		throw error(404, `Could not find ${params.slug}`);
	}
}) satisfies PageLoad;

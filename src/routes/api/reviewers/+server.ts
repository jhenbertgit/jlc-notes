import { json } from '@sveltejs/kit';

const getReviewers = async () => {
	let reviewers: Reviewer[] = [];

	const paths = import.meta.glob('/src/reviewers/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Reviewer, 'slug>'>;
			const reviewer = { ...metadata, slug } satisfies Reviewer;
			reviewers.push(reviewer);
		}
	}

	// sort from oldest to newest
	reviewers = reviewers.sort(
		(first, second) => new Date(first.date).getTime() - new Date(second.date).getTime()
	);

	return reviewers;
};

export const GET = async () => {
	const reviewers = await getReviewers();
	return json(reviewers);
};

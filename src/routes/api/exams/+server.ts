import { json } from '@sveltejs/kit';

const getExams = async () => {
	let exams: Exam[] = [];

	const paths = import.meta.glob('/src/exams/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Exam, 'slug>'>;
			const exam = { ...metadata, slug } satisfies Exam;
			exams.push(exam);
		}
	}

	// sort from oldest to newest
	exams = exams.sort(
		(first, second) => new Date(first.date).getTime() - new Date(second.date).getTime()
	);

	return exams;
};

export const GET = async () => {
	const exams = await getExams();
	return json(exams);
};

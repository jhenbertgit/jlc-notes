// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Locals {}
	// interface PageData {}
	// interface Error {}
	// interface Platform {}
}

type Note = {
	subject: string;
	professor: string;
	date: string;
	slug: string;
};

type Reviewer = {
	module: string;
	subject: string;
	date: string;
	slug: string;
};

type ReviewerDetails = {
	subject: string;
	date: string;
	slug: string;
};

type ReviewerMod = {
	module: string;
	details: ReviewerDetails[];
};

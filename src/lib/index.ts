// place files you want to import through the `$lib` alias in this folder.

export const groupByModule = (data: Reviewer[]) => {
	return data.reduce((accumulator: ReviewerMod[], item) => {
		// Find if the module already exists in the accumulator
		const existingModule: ReviewerMod | undefined = accumulator.find(
			(module) => module.module === item.module
		);

		if (existingModule) {
			// If the module exists, add the subject to its subjects array
			existingModule.details.push({
				subject: item.subject,
				date: item.date,
				slug: item.slug
			});
		} else {
			// If the module doesn't exist, create a new module with the subject
			accumulator.push({
				module: item.module,
				details: [
					{
						subject: item.subject,
						date: item.date,
						slug: item.slug
					}
				]
			});
		}

		return accumulator;
	}, []);
};

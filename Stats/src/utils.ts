export const dateStringToDate = (dateString: string): Date => {
	// date string format: dd/mm/yyyy
	const dateParts = dateString.split("/").map((val: string): number => {
		return parseInt(val);
	});

	return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};

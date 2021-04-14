import { OutputTarget } from "../SummaryReport";

export class ConsoleReport implements OutputTarget {
	print(report: string): void {
		console.log(report);
	}
}

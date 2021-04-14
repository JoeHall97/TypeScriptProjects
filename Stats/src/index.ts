import { MatchReader } from "./MatchReader";
import { SummaryReport } from "./SummaryReport";

// FOR INHERITANCE IMPLEMENTATION:
// const reader = new MatchReader("football.csv");
// reader.read();

// FOR COMPOSITION IMPLEMENTATION:
const matchReader = MatchReader.fromCsv("football.csv");
const summary = SummaryReport.winsAnalysisWithHtmlReport("Man United");

matchReader.load();
summary.buildAndPrintReport(matchReader.matches);

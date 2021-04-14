"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var SummaryReport_1 = require("./SummaryReport");
// FOR INHERITANCE IMPLEMENTATION:
// const reader = new MatchReader("football.csv");
// reader.read();
// FOR COMPOSITION IMPLEMENTATION:
var matchReader = MatchReader_1.MatchReader.fromCsv("football.csv");
var summary = SummaryReport_1.SummaryReport.winsAnalysisWithHtmlReport("Man United");
matchReader.load();
summary.buildAndPrintReport(matchReader.matches);

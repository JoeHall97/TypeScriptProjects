"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SummaryReport = void 0;
var WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
var HtmlReport_1 = require("./reportTargets/HtmlReport");
var SummaryReport = /** @class */ (function () {
    function SummaryReport(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    SummaryReport.winsAnalysisWithHtmlReport = function (team) {
        return new SummaryReport(new WinsAnalysis_1.WinsAnalysis(team), new HtmlReport_1.HtmlReport());
    };
    SummaryReport.prototype.buildAndPrintReport = function (matches) {
        var report = this.analyzer.run(matches);
        this.outputTarget.print(report);
    };
    return SummaryReport;
}());
exports.SummaryReport = SummaryReport;

import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { Summary } from './Summary';
import { WinsAnalysis } from './analyzers/WinsAnalysis';

const csvFileReader = new CsvFileReader('resources/football.csv');

const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const consoleSummary = new Summary(
  new WinsAnalysis('Man United'),
  new ConsoleReport()
);
consoleSummary.buildAndPrintReport(matchReader.matches);

const matchReaderFromCsv = MatchReader.fromCsv('resources/football.csv');
const htmlSummary = Summary.winsAnalysisWithHtmlReport('Arsenal');
matchReaderFromCsv.load();
htmlSummary.buildAndPrintReport(matchReaderFromCsv.matches);

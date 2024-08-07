import Header from "./Header";
import MonthRepay from "./MonthRepayment";
import ResultSummary from "./ResultSummary";
import TotalRepay from "./TotalRepay";

export default function Result() {
  return (
    <div className="result">
      <div className="result-summary">
        <Header>Result</Header>
        <ResultSummary />
      </div>
      <div className="result-amount">
        <MonthRepay />
        <TotalRepay />
      </div>
    </div>
  );
}

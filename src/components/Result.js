import Header from "./Header";
import ResultSummary from "./ResultSummary";

export default function Result({ children }) {
  return (
    <div className="result">
      <div className="result-summary">
        <Header>Result</Header>
        <ResultSummary />
      </div>
      <div className="result-amount">{children}</div>
    </div>
  );
}

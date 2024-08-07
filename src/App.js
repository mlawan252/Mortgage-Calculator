import "./App.css";
import Mortgage from "./components/Mortgage";
import Result from "./components/Result";
import Form from "./components/Form";
import { useState } from "react";
import MonthRepay from "./components/MonthRepayment";
import TotalRepay from "./components/TotalRepay";
export default function App() {
  const [mortgageDetails, setMortgageDetails] = useState({
    amount: "",
    term: "",
    rate: "",
    type: "",
  });
  const [errors, setErrors] = useState({
    amount: "",
    term: "",
    rate: "",
    type: "",
  });
  const [monthRepay, setMonthRepay] = useState(null);
  function handleClearAll() {
    setMortgageDetails({
      amount: "",
      term: "",
      rate: "",
      type: "",
    });
    handleClearError();
  }

  function handleClearError() {
    setErrors({ amount: "", term: "", rate: "", type: "" });
  }

  function handleRepayment() {
    const rate = Number(mortgageDetails.rate) / 100 / 12;
    if (mortgageDetails.type === "Repayment") {
      const monthlyRepayment = (
        (Number(mortgageDetails.amount) *
          (rate * Math.pow(1 + rate, Number(mortgageDetails.term)))) /
        Math.pow(1 + rate, Number(mortgageDetails.term)) - 1).toFixed(2);
      setMonthRepay(monthlyRepayment);
    } else {
      const monthlyRepayment = (
        (Number(mortgageDetails.amount) * rate) /
        12
      ).toFixed(3);
      setMonthRepay(monthlyRepayment);
    }
  }

  const totalRepay = (monthRepay * Number(mortgageDetails.term) * 12).toFixed(2);
  return (
    <div className="my-app">
      <Mortgage onHandleClick={handleClearAll}>
        <Form
          setMortgageDetails={setMortgageDetails}
          mortgageDetails={mortgageDetails}
          errors={errors}
          setErrors={setErrors}
          onHandleClick={handleClearError}
          onHandleRepayment={handleRepayment}
        />
      </Mortgage>
      <Result>
        <MonthRepay monthRepay={monthRepay} />
        <TotalRepay yearRepay={totalRepay} />
      </Result>
    </div>
  );
}


import './App.css';
import Mortgage from './components/Mortgage';
import Result from './components/Result';
import Form from "./components/Form";
import { useState } from "react";
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
  function handleClearAll() {
    setMortgageDetails({
      amount: "",
      term: "",
      rate: "",
      type: "",
    });
    handleClearError()
  }

  function handleClearError(){
    setErrors({ amount: "", term: "", rate: "", type: "" });
  }
  return (
    <div className="my-app">
      <Mortgage onHandleClick={handleClearAll}>
      <Form
        setMortgageDetails={setMortgageDetails}
        mortgageDetails={mortgageDetails}
        errors={errors}
        setErrors={setErrors}
        onHandleClick={handleClearError}
      />
      </Mortgage>
      <Result />
    </div>
  );
}



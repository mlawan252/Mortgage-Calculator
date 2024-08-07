import Button from "./Button";
import Form from "./Form";
import Header from "./Header";
import { useState } from "react";
export default function Mortgage() {
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
  function handleClick() {
    setMortgageDetails({
      amount: "",
      term: "",
      rate: "",
      type: "",
    });
    setErrors({ amount: "", term: "", rate: "", type: "" });
  }
  return (
    <div className="mortgage">
      <div className="container">
        <Header>Mortgage Calculator</Header>
        <Button onHandleClick={handleClick}>Clear All</Button>
      </div>
      <Form
        setMortgageDetails={setMortgageDetails}
        mortgageDetails={mortgageDetails}
        errors={errors}
        setErrors={setErrors}
        onHandleClick={handleClick}
      />
    </div>
  );
}

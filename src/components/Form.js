import Button from "./Button";
import Input from "./Input";

export default function Form({ setMortgageDetails, mortgageDetails, errors, setErrors, onHandleClick }) {
  
  function validateInput() {
    const error = {};
    if (!mortgageDetails.amount) {
      error.amount = "Amount field must not be empty";
    }
    if (!mortgageDetails.type) {
      error.type = "You must choose between the types";
    }
    if(!mortgageDetails.term){
      error.term = "Term field must not be empty"
    }
    if (!mortgageDetails.rate) {
      error.rate = "rate field must not be empty";
    }
    return error;
  }
  function handleSubmit(e) {
    e.preventDefault();
    const validate = validateInput();
    if((Object.keys(validate)).length>0) {
      setErrors(validate)
      return
    }
    console.log(Number(mortgageDetails.rate))
    onHandleClick()
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>Mortgage Amount</label>
      <span>{errors.amount}</span>
      <Input
        onChange={(e) =>
          setMortgageDetails({
            ...mortgageDetails,
            amount: e.target.value,
          })
        }
        value={mortgageDetails.amount}
      />
      <div className="rate-term">
        <div className="term">
          <label>Mortgage Term</label>
          <span>{errors.term}</span>
          <Input
            value={mortgageDetails.term}
            onChange={(e) =>
              setMortgageDetails({ ...mortgageDetails, term: e.target.value })
            }
          />
        </div>
        <div className="rate">
          <label>Interest Rate</label>
          <span>{errors.rate}</span>
          <Input
            value={mortgageDetails.rate}
            onChange={(e) =>
              setMortgageDetails({ ...mortgageDetails, rate: e.target.value })
            }
          />
        </div>
      </div>
      <p>Mortgage Type</p>
      <span>{errors.type}</span>
      <label>
        <Input
          type="radio"
          name="chose"
          value="Repayment"
          onChange={(e) =>
            setMortgageDetails({ ...mortgageDetails, type: e.target.value })
          }
        />
        <strong>Repayment</strong>
      </label>

      <label>
        <Input
          type="radio"
          name="chose"
          value="Interest only"
          onChange={(e) =>
            setMortgageDetails({ ...mortgageDetails, type: e.target.value })
          }
        />
        <strong>Interest Only</strong>
      </label>
      <Button>Calculate Repayment</Button>
    </form>
  );
}

import Button from "./Button";

import Header from "./Header";

export default function Mortgage({ children, onHandleClick }) {
  return (
    <div className="mortgage">
      <div className="container">
        <Header >Mortgage Calculator</Header>
        <Button onHandleClick={onHandleClick}>Clear All</Button>
      </div>
      {children}
    </div>
  );
}

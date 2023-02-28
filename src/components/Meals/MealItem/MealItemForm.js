import { useRef, useState } from "react";
import Input from "../../UI/Input";

import classes from "./MealItemForm.module.css";

const MealItemForm = ({ id, addToCart }) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountInteger = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountInteger < 1 ||
      enteredAmountInteger > 9
    ) {
      setAmountIsValid(false);
      return;
    }

    addToCart(enteredAmountInteger);
  };

  return (
    <form
      className={classes.form}
      onSubmit={submitHandler}
    >
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          type: "number",
          id: id,
          min: "1",
          max: "9",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button type="submit">+ Add</button>
      {!amountIsValid && <p>Please Enter a valid Amount!</p>}
    </form>
  );
};

export default MealItemForm;

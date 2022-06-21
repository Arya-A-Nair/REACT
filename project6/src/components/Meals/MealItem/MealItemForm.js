import React from "react";
import styles from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  const [isValid, setIsValid] = React.useState(true);
  const inputAmountRef = React.useRef(1);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = inputAmountRef.current.value;
    const enteredAmountNumber = parseInt(enteredAmount);

    if (
      enteredAmountNumber < 0 ||
      enteredAmountNumber > 5
    ) {
      setIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        label="amount"
        ref= {inputAmountRef}
        input={{
          
          id: "amount" + props.id,
          name: "amount",
          type: "number",
          min: 1,
          step: 1,
          max: 5,
          defaultValue: 1,
        }}
      />
      <button>+ Add</button>
      {!isValid && <p>Please enter a valid amount(1-5)</p>}
    </form>
  );
};

export default MealItemForm;

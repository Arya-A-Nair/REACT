import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";


const NewExpense = (props) => {
  const [addExpense, setAddExpense] = useState(false);

    const onSaveExpenseDataHandler = (enteredData) => {
        const expensedata={
            ...enteredData,
            id:Math.random().toString(),
        }
        props.onAddExpense(expensedata);
    }

    const addChangeHandler = (flag) => {
        setAddExpense(flag);
    }



  return (
    <div className="new-expense">
    {!addExpense ? (
        <button onClick={()=>setAddExpense(!addExpense)}>Add Expense</button>
      
      ):(
      <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} onaddChange={addChangeHandler}/>
    )}
      
      
    </div>
  );
};

export default NewExpense;

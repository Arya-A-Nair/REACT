import ExpenseItem from "./ExpenseItem";
import "./Expense.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [selectYear, setSelectYear] = useState(2020);
  const yearFilterHandler = (year) => {
    setSelectYear(year);
  }
  const filteredExpenses = props.expenses.filter(expense => {
    return expense.date.getFullYear().toString() === selectYear;
  })
  

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter yearFilter={yearFilterHandler} defYear={selectYear}/>
        <ExpensesChart expenses={filteredExpenses}/>
        {filteredExpenses.length === 0 ? (<h2 className="expenses-list__fallback" style={{"color":"white"}}>No Expense</h2>)
        :
        (filteredExpenses.map((exp) => {
          return <ExpenseItem key={exp.id} {...exp} />;
        }))}
      </Card>
    </div>
  );
};

export default Expenses;

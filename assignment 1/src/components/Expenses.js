import ExpenseItem from "./ExpenseItem";
import './Expense.css'
const Expenses = (props) => {
  return (
    <div className="expenses">
      {props.expenses.map((exp, index) => {
        return <ExpenseItem key={exp.id} {...exp} />;
      })}
    </div>
  );
};

export default Expenses;

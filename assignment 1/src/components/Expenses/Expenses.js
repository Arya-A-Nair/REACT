import ExpenseItem from "./ExpenseItem";
import "./Expense.css";
import Card from "../UI/Card";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.expenses.map((exp, index) => {
        return <ExpenseItem key={exp.id} {...exp} />;
      })}
    </Card>
  );
};

export default Expenses;

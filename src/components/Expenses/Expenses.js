
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFillter from "./ExpensesFillter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [selectedYear, setSelectedYear]=useState('All')
  const changeSelectedYearHandler = (e)=>{
    setSelectedYear(e.target.value)
  }
  const filterdExpenses = props.expenses.filter((expenses)=>{
     return expenses.date.getFullYear().toString() === selectedYear
  })
  return (
    <Card className="expenses">
      <ExpensesFillter 
      selectedYear={selectedYear} 
      changeSelectedYear={changeSelectedYearHandler}/>
      
      <ExpensesList expenses={props.expenses}
      filterdExpenses={filterdExpenses}
      selectedYear={selectedYear}/>

      
    </Card>
  );
}

export default Expenses;

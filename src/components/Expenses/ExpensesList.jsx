import React from 'react'
import "./ExpensesList.css"
import ExpenseItem from './ExpenseItem'
const ExpensesList = ({expenses,filterdExpenses,selectedYear}) => {
    const getCurrentExpenses =()=>{
        if(selectedYear==="All"){
            return expenses
        }
        return filterdExpenses
    }
    const renderdExpenses = getCurrentExpenses()
  return (
    <ul className='expenses-list'>
   {renderdExpenses.map((expenses) => {
        return (
          <ExpenseItem
          key={expenses.id}
            expenseTitle={expenses.title}
            expensePrice={expenses.amount}
            expenseDate={expenses.date}
          />
        );
      })}
    </ul>
  )
}

export default ExpensesList
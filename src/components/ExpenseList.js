import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem'
import { getVisibleExpenses } from '../selectors/expenses'

const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    {props.expenses.map((expense)=>{
      return ( 
        <ExpenseListItem 
          key={expense.id}
          {...expense}/>
      )
    })}
  </div>
)

// REDUX 
const mapStateToProps = (state)=>{
  return {
    expenses: getVisibleExpenses(state.expenses, state.filters)
    // expenses: state.expenses,
    // filters: state.filters
  }
}

// connect connects redux and react 
export default connect(mapStateToProps)(ExpenseList);

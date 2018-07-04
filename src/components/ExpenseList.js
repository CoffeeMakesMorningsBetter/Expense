import React from 'react';
import { connect } from 'react-redux';

const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    {props.filters.text}
    {props.expenses.length} 
  </div>
)

// REDUX 
const mapStateToProps = (state)=>{
  console.log("this is expenses", state.expenses.length)
  return {
    expenses: state.expenses,
    filters: state.filters
  }
}

// connect connects redux and react 
export default connect(mapStateToProps)(ExpenseList);

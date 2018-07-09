import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses'

export class AddExpensePage extends Component {
  onSubmit = (expenseObj) => {
    this.props.addExpense(expenseObj)
    // props.dispatch(addExpense(expenseObj))
    // redirect home
    this.props.history.push('/')
  }
  render(){
    return (
      <div>
        <h1>Add Expense</h1>
          <ExpenseForm onSubmit={this.onSubmit}/>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  addExpense: (expenseObj) => dispatch(addExpense(expenseObj))
})

export default connect(undefined, mapDispatchToProps)(AddExpensePage)
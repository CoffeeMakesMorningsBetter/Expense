import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { editExpense, removeExpense } from '../actions/expenses'


const EditExpensePage = (props) => (
  <div>
    <ExpenseForm 
      expense={props.expense}
      onSubmit={(expenseObj)=> {
        props.dispatch(editExpense(props.expense.id, expenseObj))
        props.history.push('/')
      }}  
    />
    <button 
    onClick={() => {
      props.dispatch(removeExpense({id: props.expense.id}))
      props.history.push('/')
    }}>Remove Item</button>
  </div>
)


const mapStateToProps = (state, props) => {
   return {
     expense: state.expenses.find((expense) => expense.id === props.match.params.id)
   }
}

export default connect(mapStateToProps)(EditExpensePage)
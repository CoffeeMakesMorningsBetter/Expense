import React, {Component} from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { editExpense, removeExpense } from '../actions/expenses'
import { pseudoRandomBytes } from 'crypto';

// class 
// mapDispatchToProps

// should render EditExpensePage - Snapshot
// Should handle editExpense -Spy
// should handle remove Expense - Spy
export class EditExpensePage extends Component {
  onSubmit = (expenseObj) => {
    this.props.editExpense(this.props.expense.id, expenseObj)
    this.props.history.push('/')
  }
  onRemove = () => {
    this.props.removeExpense({id: this.props.expense.id})
    this.props.history.push('/')
  }
  render(){
    return (
      <div>
      <ExpenseForm 
        expense={this.props.expense}
        onSubmit={this.onSubmit}  
      />
      <button 
      onClick={this.onRemove}>Remove Item</button>
    </div>
    )
  }
}

const mapStateToProps = (state, props) => {
   return {
     expense: state.expenses.find((expense) => expense.id === props.match.params.id)
   }
}

const mapDispatchToProps = (dispatch) => ({
  editExpense: (id, expense) => dispatch(editExpense(id, expense)),
  removeExpense: (id) => dispatch(removeExpense(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)
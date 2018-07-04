import React, {Component} from 'react';

export default class ExpenseForm extends Component {
  state = {
    description: '',
    amount: '',
    note: ''
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  amountChange = (e) => {
    const amount = e.target.value
    if(amount.match(/^\d*(\.\d{0,2})?$/g)){
      this.setState({[e.target.name]: amount})
    }
  }

  render(){
    return (
      <div>
        <form>
          <input
            type='text'
            placeholder='Description'
            name='description'
            value={this.state.description}
            onChange={this.handleChange}
            autoFocus
          />
          <input
            type='text'
            placeholder='Amount'
            name='amount'
            value={this.state.amount}
            onChange={this.amountChange}
          />
          <textarea 
            name="note"
            value={this.state.note}
            placeholder='Add note for your expense (optional)'
            onChange={this.handleChange}>
          </textarea>
          <button>Add Expense</button>
        </form>
      </div>
    )
  }
}
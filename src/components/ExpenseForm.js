import React, {Component} from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css'

const date = moment()
console.log(date.format('MMM Do, YYYY'))

export default class ExpenseForm extends Component {
  state = {
    description: '',
    amount: '',
    note: '',
    createdAt: moment(),
    calendarFocused: false
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

  onDateChange = (createdAt) => {
    this.setState(() => ({ createdAt }));
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };

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
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
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
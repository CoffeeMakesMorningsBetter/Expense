import React from 'react'
import { shallow } from 'enzyme'
import ExpenseForm from '../../components/ExpenseForm'
import expenses from '../fixtures/expenses'
import { wrap } from 'module';
import moment from 'moment'

test('should render ExpenseForm correctly', () => {
  const wrapper = shallow(<ExpenseForm />)
  expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseForm correctly with expense data', () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[1]}/>)
  expect(wrapper).toMatchSnapshot()
})

// Submit Test
test('should render error for invalid form submission', () => {
  const wrapper = shallow(<ExpenseForm />)
  // before error
  expect(wrapper).toMatchSnapshot()
  wrapper.find('form').simulate('submit', {
    // fake prevnt default 
    preventDefault: () => { }
  })
  expect(wrapper.state('error').length).toBeGreaterThan(0)
  expect(wrapper).toMatchSnapshot()
})

test('should set description on input change', () => {
  const value = 'New Description'
  const wrapper = shallow(<ExpenseForm />)
  // at multiple inputs get by index
  wrapper.find('input').at(0).simulate('change', {
    // https://github.com/airbnb/enzyme/issues/1283
    target: {name: 'description', value: value}
  })
  expect(wrapper.state('description')).toBe(value)
})

test('should set note on textarea change', () => {
  const value = 'Good day'
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find('textarea').simulate('change', {
    target: {name: 'note', value: value}
  })
  expect(wrapper.state('note')).toBe(value)
})

// testing amount 

test('should set amount if valid input', () => {
  const value = '23.50'
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find('input').at(1).simulate('change', {
    target: { value }
  })
  expect(wrapper.state('amount')).toBe(value)
})

test('should not set amount if invalid input', () => {
  const value = '12.1222'
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find('input').at(1).simulate('change', {
    target: { value }
  })
  expect(wrapper.state('amount')).toBe('')
})

// TEST SPIES

test('should call onSubmit prop for valid from submission', () => {
  const onSubmitSpy = jest.fn()
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>)
  wrapper.find('form').simulate('submit', { 
    preventDefault: () => { }
  })
  expect(wrapper.state('error')).toBe('')
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description: expenses[0].description,
    amount: expenses[0].amount,
    note: expenses[0].note,
    createdAt: expenses[0].createdAt
  })
})

// update datepicker
test('should set new date on date change', () => {
  const now = moment()
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find('SingleDatePicker').prop('onDateChange')(now)
  expect(wrapper.state('createdAt')).toEqual(now)
})

// update calanderFocus
test('should set calandar focus on change', () => {
  const focused = true
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find('SingleDatePicker').prop('onFocusChange')({focused})
  expect(wrapper.state('calendarFocused')).toBe(focused)
})
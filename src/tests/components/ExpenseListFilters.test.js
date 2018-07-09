import React from 'react'
import { shallow } from 'enzyme'
import { ExpenseListFilters } from '../../components/ExpenseListFilters'
import {filters, altfilters } from '../fixtures/filters'
import moment from 'moment'

let setTextFilter, sorByDate, sorByAmount, setStartDate, setEndDate, wrapper 

beforeEach(() => {
  setTextFilter = jest.fn()
  sorByDate = jest.fn()
  sorByAmount = jest.fn()
  setStartDate = jest.fn()
  setEndDate = jest.fn()
  wrapper = shallow( 
    <ExpenseListFilters 
      filters={filters}
      setTextFilter={setTextFilter}
      sorByDate={sorByDate}
      sorByAmount={sorByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />)
})

test('should render expense list filters correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should render expense list with altfilters correctly', () => {
  wrapper.setProps({
    filters: altfilters
  })
  expect(wrapper).toMatchSnapshot()
})

test('should handle text change', () => {
  const text = 'rent'
  wrapper.find('input').simulate('change', {
    target: { text }
  })
  expect(wrapper).toHaveBeenLastCalledWith(text)
})

test('should  sort by date', () => {
  const value = 'date'
  wrapper.setProps({
    filters: altfilters
  })
  wrapper.find('select').simulate('change', {
    target: { value }
  })
  expect(sortByDate).toHaveBeenCalled()
})

test('should  sort by amount', () => {
  const value = 'amount'
  wrapper.setProps({
    filters: altfilters
  })
  wrapper.find('select').simulate('change', {
    target: { value }
  })
  expect(sortByAmount).toHaveBeenCalled()
})

test('should  handle date changes', () => {
  const startDate = moment(0).add(4, 'years')
  const endDate = moment(0).add(8, 'years')
  wrapper.find('DateRangePicker').props('onDatesChange')({startDate, endDate})
  expect(setStartDate).toHaveBeenLastCalledWith(startDate)
  expect(setEndDate).toHaveBeenLastCalledWith(endDate)
})

test('should should handle date focus changes', ()=>{
  const calendarFocus = 'endDate';
  wrapper.find('DateRangePicker').props('onFocuschange')(calendarFocus)
  expect(wrapper.state('calendarFocused')).toBe(calendarFocus)
})
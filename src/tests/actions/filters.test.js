import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../../actions/filters'
import moment from 'moment'

test('should generate set start date in action object', () => {
  const action = setStartDate(moment(0))
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  })
})

test('should generate set end date in action object', () => {
  const action = setEndDate(moment(0))
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  })
})

test('should set the sortBy key in the action object to date', () => {
  const action =  sortByDate()
  expect(action).toEqual({
    type: 'SORT_BY_DATE',
    sortBy: 'date'
  })
})

test('should set the sortBy key in the action object to amount', () => {
  const action = sortByAmount()
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT',
    sortBy: 'amount'
  })
})

test('should update the text key in the action object to passed in value', () => {
  const action = setTextFilter('rent')
  expect(action).toEqual({
    type: 'SET_TEXT_FILTERS',
    text: 'rent'
  })
})

test('should set the text key in the action object to its default value if no parameter is passed in', () => {
  const action = setTextFilter()
  expect(action).toEqual({
    type: 'SET_TEXT_FILTERS',
    text: ''
  })
})
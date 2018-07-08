import { filterReducer } from '../../reducers/filters'
import moment from 'moment'

test('should setup default filters values', () => {
  const state = filterReducer(undefined, { type: '@@INIT'})
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  })
})

test('should set sortBy to amount', () => {
  const state = filterReducer(undefined, {type: 'SORT_BY_AMOUNT', sortBy: 'amount'})
  expect(state.sortBy).toBe('amount')
})

test('should set sortBy to date', () => {
  const currentState = {
    text: '',
    sortBy: 'amount',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  }
  const state = filterReducer(currentState, {type: 'SORT_BY_DATE', sortBy: 'date'})
  expect(state.sortBy).toBe('date')
})

test('should set startDate', () => {
  const currentState = {
    text: '',
    sortBy: 'amount',
    startDate: 'undefined',
    endDate: moment().endOf('month')
  }
  const state = filterReducer(currentState, {type: 'SET_START_DATE', startDate: moment().startOf('month')})
  expect(state.startDate).toEqual(moment().startOf('month'))
})

test('should set endDate', () => {
  const currentState = {
    text: '',
    sortBy: 'amount',
    startDate: moment().startOf('month'),
    endDate: 'undefined'
  }
  const state = filterReducer(currentState, {type: 'SET_END_DATE', endDate: moment().endOf('month')})
  expect(state.endDate).toEqual(moment().endOf('month'))
})

test('should set text value', () => {
  const currentState = {
    text: '',
    sortBy: 'amount',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  }
  const state = filterReducer(currentState, {type: 'SET_TEXT_FILTERS', text: 'rent'})
  expect(state.text).toBe('rent')
})
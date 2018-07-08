import { expensesReducer } from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('should set default state', () => {
  const state = expensesReducer(undefined, { type:'@@INIT'});
  expect(state).toEqual([])
})

test('should remove an expense with a valid id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([expenses[0], expenses[2]])
})

test('should not remove expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses)
})

// should add an expense 
test('should add an expense to expenses', () => {
  const action =  {type: 'ADD_EXPENSE',
    expense: {
      id: '4',
      description: 'eat fish',
      note: 'tasty',
      amount: 100,
      createdAt: 20000
    }
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([...expenses, action.expense]) 
})

// should edit an expense 
test('should edit expense given id', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: '1',
    updates: {
      description: 'gas'
    }
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([{"amount": 195, "createdAt": 0, "description": "gas", "id": "1", "note": ""}, {"amount": 109500, "createdAt": -345600000, "description": "rent", "id": "2", "note": ""}, {"amount": 4500, "createdAt": 345600000, "description": "credit card", "id": "3", "note": ""}])
})

// should not edit expense if expense not found
test('should not edit expense given an invalid id', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: '1000',
    updates: {
      description: 'gas'
    }
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses)
})
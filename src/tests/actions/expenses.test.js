import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

test('should setup remove expense object', () => {
  const action = removeExpense({id: '123'})
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123'
  })
})

test('it should update an existing expense object', () => {
  const action = editExpense( '123', {amount: 100, description: 'Yup One Me A Fish'})
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123',
    updates: {amount: 100, description: 'Yup One Me A Fish'}
  })
})

test('it should add an expense object with provided values', () => {
  const expenseData = {
    description:'rent',
    amount: 1000,
    createdAt: 1000,
    note: 'Last months rent'
  }
  const action = addExpense(expenseData)
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {...expenseData,
    // expect any since this is random that its a
    id: expect.any(String)
    }
  })
})

test('it should add an expense object with default values', () => {
  const action = addExpense()
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense:{
      id: expect.any(String),
      description: '',
      note: '',
      amount: 0,
      createdAt: 0
    }
  })
})
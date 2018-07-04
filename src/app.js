import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import { getVisibleExpenses } from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();


// addExpense -> Water bill
store.dispatch(addExpense({description: 'Water Bill', amount: 100}))
// addExpense -> Gas bill
store.dispatch(addExpense({description: 'Gas Bill', amount: 50}))
// setTextFilter -> bill
store.dispatch(setTextFilter('bill'))

setTimeout(() => {
  store.dispatch(setTextFilter('water'))
},3000)

// getVisibleExpenses
const state = store.getState();
const visbleExpenses = getVisibleExpenses(state.expenses, state.filters)
// console.log(visbleExpenses)

const jsx = (
  <Provider store={store}>
    <AppRouter/>
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))
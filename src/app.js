import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import { getVisibleExpenses } from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();


// addExpense -> Water bill
store.dispatch(addExpense({description: 'Water Bill'}))
// addExpense -> Gas bill
store.dispatch(addExpense({description: 'Gas Bill'}))
// setTextFilter -> bill
store.dispatch(setTextFilter('bill'))

// getVisibleExpenses
const state = store.getState();
const visbleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visbleExpenses)



ReactDOM.render(<AppRouter/>, document.getElementById('app'))
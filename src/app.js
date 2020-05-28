import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './stores/configureStore'
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
//import Redux102 from './new/Redux-expensify'


const store = configureStore()

store.dispatch(addExpense({description:'Water Bill', amount: 3000, note:'fairly pricey', createdAt:1055}))
store.dispatch(addExpense({ description: 'Gas Bill', amount: 2000, note: 'fairly okay', createdAt:1255 }))
store.dispatch(addExpense({ description: 'Rent', amount: 40000, note: 'nice', createdAt:1155}))



    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)



const jsx =  (
    <Provider store={store}>
    <AppRouter />
    </Provider>
)


ReactDOM.render(jsx, document.getElementById('app'))

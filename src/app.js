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

const jsx =  (
    <Provider store={store}>
    <AppRouter />
    </Provider>
)


ReactDOM.render(jsx, document.getElementById('app'))

import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import expensesReducer from '../reducers/expenses'
import filtersReducer from '../reducers/filters'
import thunk from 'redux-thunk'
import authReducer from '../reducers/auth'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // use this instead of window.__REDUX_DEVTOOLS_EXTENSION_below 


// store creation

export default () => {
    const store = createStore(combineReducers({
    expenses: expensesReducer,
        filters: filtersReducer,
    auth: authReducer
    }),
        composeEnhancers(applyMiddleware(thunk))
    )

    return store

}


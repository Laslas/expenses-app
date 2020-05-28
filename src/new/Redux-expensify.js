import React from 'react'
import { createStore, combineReducers } from 'redux'
import { v4 as uuidv4 } from 'uuid'


const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
    } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuidv4(),
        description,
        note,
        amount,
        createdAt
    }
    })

const removeExpense = ({id}={}) => {
    return {
        type: 'REMOVE_EXPENSE',
        id
        }
    }

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
    })

const setTextFilter = (text='') => ({
    type: 'SET_TEXT',
    text
        
})

const sortByAmount = () => ({
    type:'SORT_BY_AMOUNT',
    sortBy: 'amount'
})

const sortByDate = () => ({
    type:'SORT_BY_DATE',
    sortBy: 'date'
})

const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
})

const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})
    
const expensesReducerDefaultState = []

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ]
        case 'REMOVE_EXPENSE':
            return state.filter((expense) => expense.id !== action.id)
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense
                }
            })
        default:
            return state
    }
}

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined

}



const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT':
            return {
                ...state,
                text : action.text
            }
            case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy : action.sortBy
            }
            case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy : action.sortBy
            }
            case 'SET_START_DATE':
            return {
                ...state,
                startDate : action.startDate
            }
            case 'SET_END_DATE':
            return {
                ...state,
                endDate : action.endDate
            }
        default:
            return state
    }
}

//get visible expenses

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate
        const endDatematch = typeof endDate !== 'number' || expense.createdAt <= endDate
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())
        
        return startDateMatch && endDatematch && textMatch
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1 
        }
    })
    
}

// store creation
const store = createStore(combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer        
} ))

store.subscribe(() => {
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses)
})

const one1 = store.dispatch(addExpense({description:'flight Ticket', note:'bought for flying back', amount: 51600, createdAt: 905}))
const two = store.dispatch(addExpense({ description: 'Rent', note: 'new apt', amount: 41600, createdAt:1067 }))


// store.dispatch(removeExpense({ id: one1.expense.id }))
// store.dispatch(editExpense(two.expense.id, { note: 'found cheaper apt', amount: 300 }))
 store.dispatch(setTextFilter('t'))
store.dispatch(sortByAmount())
// store.dispatch(sortByDate())

// store.dispatch(setStartDate(125))
// store.dispatch(setStartDate())
// store.dispatch(setEndDate(1250))



const demoState = {
    expenses :[{
        id: 'fbgvsg8755',
        description: 'flight Ticket',
        note: 'Bought and paid for months ago',
        amount: 41900,
        createdAt:0
    }],
    filters: {
        text: 'rent',
        sortBy: 'Amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
}

const Info = (props) => {
    return (
        <div>
            <h1>Info</h1>
            <p>The info is: {props.info}</p>
        </div>
    )
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => {
       return  <div>
       { props.isAuthenticated ? <WrappedComponent {...props}/> : <p>Please log in!</p>}
           
        </div>

    }
}

const AuthInfo = requireAuthentication(Info)

const Redux102 = () => {
    //console.log(store.getState())
  
   
    return (
        <div>
            <AuthInfo  isAuthenticated={false} info='These are the details'/>
                 
        </div>
    )
}

export default Redux102
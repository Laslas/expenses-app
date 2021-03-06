import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {
    startAddExpense,
    addExpense,
    editExpense,
    removeExpense,
    setExpenses,
    startSetExpenses,
    startRemoveExpense
} from '../../actions/expenses'
import expenses from '../fixtures/expenses'
import database from '../../firebase/firebase'


const createMockStore = configureMockStore([thunk])

beforeEach((done) => {
    const expenseData = {}
    
    expenses.forEach(({ id, description, note, createdAt }) => {
        expenseData[id] ={description, note, createdAt}
    })
    database.ref('expenses').set(expenseData).then(()=> done())
})
test('sets up remove expense action object', () => {
    const action = removeExpense({
        id: '45rt'
    })
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '45rt'
    })
})
//done() used for asynchronous functions

test('should remove expense from firebase', (done) => {
    const store = createMockStore({})
    const id = expenses[2].id
    store.dispatch(startRemoveExpense({ id })).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            id
        })
        return database.ref('expenses/${id}').once('value')
    }).then(() => {
        expect(snapshot.val()).toBeFalsy()
        done()
    })
})

test('sets up edit expense action object', () => {
    const action = editExpense('45rt', {
        note: 'new note'
    })
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '45rt',
        updates: {
            note: 'new note'
        }
    })
})

// test('sets up add expense action object with default values', () => {


//     const action = addExpense()
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//             id: expect.any(String),
//             description: '',
//             note: '',
//             amount: 0,
//             createdAt: 0

//         }
//     })
// })


test('sets up add expense action object with provided values', () => {
   

    const action = addExpense(expenses[2])
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    })

})

test('should add expense to database and store', (done) => {  

    const store = createMockStore({})

    const expenseData = {
        description: 'food',
        amount: 2000,
        note: 'very good bargain',
        createdAt: 2456
    }
    
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
            
        })

       return database.ref(`expenses/${actions[0].expense.id}`).once('value')
        
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData)
        done()
    })

})

test('should add expense with defaults to database and store', () => {  

   
    const store = createMockStore({})

    const expenseDefaults = {
        description: '',
        amount: 0,
        note: '',
        createdAt: 0
    }
    
    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseDefaults
            }
            
        })

       return database.ref(`expenses/${actions[0].expense.id}`).once('value')
        
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseDefaults)
        done()
    })

})

test('should setup set expense action object with data', () => {
    const action = setExpenses(expenses)

    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    })

})

test('should fetch expenses from firebase', (done) => {
    const store = createMockStore({})

    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        })
        done()
    })
})
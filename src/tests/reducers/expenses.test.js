import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'


test('should set defaul state', () => {
    const state = expensesReducer(undefined, {
        type: '@@INIT'
    })

    expect(state).toEqual([])
})

test('should remove expense by id', () => {

    const action = {

        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action)

    expect(state).toEqual([expenses[0], expenses[2]])
})

test('should not remove expense by id', () => {

    const action = {

        type: 'REMOVE_EXPENSE',
        id: '-1'
    }
    const state = expensesReducer(expenses, action)

    expect(state).toEqual(expenses)
})

test('should not Edit expense by id if not found', () => {
    const amount = 20098
    const action = {

        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            amount
        }
    }
    const state = expensesReducer(expenses, action)

    expect(state).toEqual(expenses)
})

test('should  Edit expense by id ', () => {
    const amount = 20098

    const action = {

        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            amount
        }
    }
    const state = expensesReducer(expenses, action)

    expect(state[1].amount).toBe(amount)
})

test('should  add an expense ', () => {

    const expense = {

        id: "54",
        description: "food",
        note: "",
        amount: 1295,
        createdAt: 2500
    }

    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const state = expensesReducer(expenses, action)

    expect(state).toEqual([...expenses, expense])
})

test('should set expenses', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses: [expenses[1]]
        
        
    }
    const state = expensesReducer(expenses, action)
    
    expect(state).toEqual([expenses][1])
})
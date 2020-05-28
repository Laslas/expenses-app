import {
    addExpense,
    editExpense,
    removeExpense
} from '../../actions/expenses'


test('sets up remove expense action object', () => {
    const action = removeExpense({
        id: '45rt'
    })
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '45rt'
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

test('sets up add expense action object with default values', () => {


    const action = addExpense()
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0

        }
    })
})


test('sets up add expense action object with provided values', () => {
    const expenseData = {
        description: 'ticket',
        amount: 10900,
        createdAt: 1800,
        note: 'flight ticket'
    }

    const action = addExpense(expenseData)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })

})
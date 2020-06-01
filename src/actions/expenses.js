import {
    v4 as uuidv4
} from 'uuid'
import database from '../firebase/firebase'



const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
})
//this section only due to firebase
export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = '',
                note = '',
                amount = 0,
                createdAt = 0
        } = expenseData
        const expense = { description, note, amount, createdAt }
        
       return database.ref('expenses').push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }))
        })
    }
}



const removeExpense = ({
    id
} = {}) => {
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


export {
    addExpense,
    editExpense,
    removeExpense
}
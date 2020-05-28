import React from 'react'
import { connect } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import selectExpenses from '../selectors/expenses'
import ExpenseListItem from './ExpenseListItem'



const ExpenseList = (props) => (
    <div>
    <h1>Expense List</h1>
    {
        props.expenses.map((expense) => (
    
            <ExpenseListItem
                    
                key={uuidv4()}
                {...expense}
    
            />
        ))
    }
    </div>      


)

const MapStateToProps = (state) => ({
    expenses: selectExpenses(state.expenses, state.filters)

})

export default connect(MapStateToProps)(ExpenseList)


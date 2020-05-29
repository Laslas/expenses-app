import React from 'react'
import { connect } from 'react-redux'
import numeral from "numeral";
import selectExpensesTotal from '../selectors/expenses-total'
import selectExpenses from '../selectors/expenses'


const ExpenseSummary = (props) => {
    
    let total = selectExpensesTotal(props.expenses)
    let count = props.expenses.length
    const plu = count === 1 ? '' : 's'
    
    return (
        <div>
        {count < 1 ? '' : <p>{`You are viewing ${count} expense${plu} totalling `}{numeral(total/100).format('$0,0.00')}</p>}           
           
        </div>
    )
}

const MapStateToProps = (state) => ({
    expenses:selectExpenses(state.expenses, state.filters)

})

export default connect(MapStateToProps)(ExpenseSummary)
import React from 'react'
import { connect } from 'react-redux'
import numeral from "numeral";
import selectExpensesTotal from '../selectors/expenses-total'
import selectExpenses from '../selectors/expenses'


const ExpenseSummary = ({count, total}) => {
    
    
    const plu = count === 1 ? '' : 's'
    
    return (
        <div>
         <h1>{`You are viewing ${count} expense${plu} totalling `}{numeral(total/100).format('$0,0.00')}</h1>          
           
        </div>
    )
}

const MapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters)
    
    return {
        total: selectExpensesTotal(visibleExpenses),
        count:visibleExpenses.length
    }

}

export default connect(MapStateToProps)(ExpenseSummary)
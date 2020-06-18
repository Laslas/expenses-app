import React from 'react'
import { connect } from 'react-redux'
import {  Link} from "react-router-dom";
import numeral from "numeral";
import selectExpensesTotal from '../selectors/expenses-total'
import selectExpenses from '../selectors/expenses'


const ExpenseSummary = ({count, total}) => {
    
    
    const plu = count === 1 ? '' : 's'
    
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">You are viewing <span>{count}</span> expense{plu} totalling <span>{numeral(total / 100).format('$0,0.00')}</span></h1>   
            
                <div className="page-header__actions">
                <Link className="button" to="/create">Add Expense</Link>
                </div>
</div>
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
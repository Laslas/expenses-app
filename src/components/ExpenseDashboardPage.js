import React from 'react'
import ExpenseList from './ExpensList'
import ExpenseListFilters from './ExpenseListFilters'
import ExpenseSummary from './ExpenseSummary'


const ExpenseDashboardPage = () => (
    <div>
     <ExpenseListFilters />
        <ExpenseList />
        <ExpenseSummary />
      
        
    </div>
)




export default ExpenseDashboardPage
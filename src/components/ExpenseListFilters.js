import React from 'react'
import { connect } from 'react-redux'
import { DateRangePicker } from 'react-dates'
import { v4 as uuidv4 } from 'uuid'
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate}  from '../actions/filters'


class ExpenselistFilters extends React.Component{
    state = {
        focused: null,
        id: uuidv4()
    }



    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate))
        this.props.dispatch(setEndDate(endDate))
    }
    
    onFocusChange = (focused) => {
        this.setState(()=>({focused}))
    }

        render(){
            return (
                <div>
        
        <input type="text" value={this.props.filters.text} onChange={(e) => {
            this.props.dispatch(setTextFilter(e.target.value))
            console.log(this.props.filters)
        }} />
        
        <select
            name=""
            id=""
            value={this.props.filters.sortBy}
            onChange={(e) => {
                if (e.target.value === 'date') {
                    return this.props.dispatch(sortByDate())
                } else if (e.target.value === 'amount') {
                    return this.props.dispatch(sortByAmount())
                }
           }}
        >
        <option value="date">Date</option>
        <option value="amount">Amount</option>
                    </select>
         
                    <DateRangePicker
                        startDate={this.props.filters.startDate} 
                        startDateId={this.state.id}
                        endDate={this.props.filters.endDate}
                        endDateId={this.state.id + 1}
                        onDatesChange={this.onDatesChange}
                        focusedInput={this.state.focused}
                        onFocusChange={this.onFocusChange}
                        showClearDates={true}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    
    </div>

            )
        }
    
}


const MapStateToProps = (state) => ({
    filters: state.filters
})

export default connect(MapStateToProps)(ExpenselistFilters)
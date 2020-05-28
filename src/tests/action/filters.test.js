import moment from 'moment'
import {
    setTextFilter,
    sortByAmount,
    sortByDate,
    setStartDate,
    setEndDate
} from '../../actions/filters'


test('should generate a start date action object', () => {
    const action = setStartDate(moment(0))

    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
})

test('should generate an end date action object', () => {
    const action = setEndDate(moment(0))

    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
})


test('should set up a sort by date action object', () => {
    const action = sortByDate('date')

    expect(action).toEqual({
        type: 'SORT_BY_DATE',
        sortBy: 'date'
    })
})


test('should set up a sort by amount action object', () => {
    const action = sortByAmount('amount')
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT',
        sortBy: 'amount'
    })
})

test('sets up text filter action object with default values', () => {
    const action = setTextFilter()
    expect(action).toEqual({
        type: 'SET_TEXT',
        text: ''
    })
})

test('sets up text filter action object with given values', () => {
    const textData = 'text'

    const action = setTextFilter(textData)
    expect(action).toEqual({
        type: 'SET_TEXT',
        text: textData
    })
})
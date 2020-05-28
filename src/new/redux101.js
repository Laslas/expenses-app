import React from 'react'
import {createStore } from 'redux'

const increaseCount = ({incrementBy = 1}={}) => ({
    type: 'INCREMENT',
    incrementBy
})

const decreaseCount = ({decrementBy = 1}={}) => ({
    type: 'DECREMENT',
    decrementBy
})

const resetCount = () => ({
    type: 'RESET'
})

const setCount = ({count }) => ({
    type: 'SET',
    count
})

const store = createStore((state = { count: 0 }, action) => {

    switch (action.type) {
        case 'INCREMENT':
            return {
            count : state.count + action.incrementBy
            };
        case 'DECREMENT':
        return {
            count : state.count - action.decrementBy
        };
        case 'RESET':
        return {
            count : 0
        };
        case 'SET':
            return {
                count : action.count
            }
    
        default:
            return state
    }

       
})



store.dispatch(resetCount({count:10}))

store.dispatch(increaseCount({incrementBy: 10}))

store.dispatch(setCount({count:10}))
store.dispatch(decreaseCount())
store.dispatch(decreaseCount({decrementBy: 5}))



const Redux101 = () => {
    console.log(store.getState())
    
   
    return (
        <div>
            hey
                 
        </div>
    )
}

export default Redux101
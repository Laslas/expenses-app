import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'


export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            focused: false,
            id: uuidv4(),
            error: ''
        }
    }




    onDescriptionChange = (e) => {
        const description = e.target.value
        this.setState(() => ({ description }))
    }

    onNoteChange = (e) => {
        const note = e.target.value
        this.setState(() => ({ note }))
    }

    onAmountChange = (e) => {
        const amount = e.target.value
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => {
                return {
                    amount
                }
            })
        }

    }


    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({
                createdAt
            }))
        }
    }

    onFocusChange = ({ focused }) => {
        this.setState(() => ({
            focused
        }))
    }

    onSubmit = (e) => {
        e.preventDefault()

        if (!this.state.description || !this.state.amount) {
            this.setState(() => this.state.error = 'Please provide description and amount!')

        } else {
            this.setState(() => ({
                error: ''
            }))

            this.props.onSubmit({
                description: this.state.description,
                note: this.state.note,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf()

            })

        }
    }

    render() {
        return (
            
                

            <form className="form" onSubmit={this.onSubmit}>
            {this.state.error && <p className="form__error">{this.state.error}</p>}
                    <input
                        type="text"
                        className="text-input" 
                        name=""
                        placeholder="description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />

                    <input
                    className="text-input" 
                        type="number"
                        name=""
                        placeholder="amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}

                    />
                    <br />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.focused}
                        onFocusChange={this.onFocusChange}
                        id={this.state.id}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />

                  

                    <textarea
                    className="text-area"
                        name=""
                        id=""
                        placeholder="(optional)"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    >
                    </textarea>
                    <br />

                <div>
                <button className="button">Save Expense</button>
                </div>
                </form>
            
        )
    }

}
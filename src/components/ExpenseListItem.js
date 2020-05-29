import React from 'react'
import { NavLink } from 'react-router-dom';
import moment from 'moment'
import numeral from "numeral";




 const ExpenseListItem = ({id, description, amount , createdAt}) => (

        <div>
        <NavLink to="/" activeClassName="is-active" exact to={`/edit/${id}`}><p>{description}</p></NavLink>
            
            <p>{numeral(amount/100).format('$0,0.00')}</p>
         <p>{moment(createdAt).format('Do MMMM, YYYY')}</p>
         
        </div>


  
 )



export default ExpenseListItem
import React from 'react'
import { NavLink} from 'react-router-dom';



 const ExpenseListItem = (props) => (

        <div>
        <NavLink to="/" activeClassName="is-active" exact to={`/edit/${props.id}`}><p>{props.description}</p></NavLink>
            
            <p>{props.amount}</p>
         <p>{props.createdAt}</p>
         
        </div>


  
 )



export default ExpenseListItem
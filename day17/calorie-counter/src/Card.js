import	React from 'react'
import "./Card.css"
function Item({name , cal}) 
    {
        return (
                <div className= "item">
                    <h3>{name}</h3>
                    <p>you have consumed {cal} cals today</p>
             </div>)
    }
export default Item
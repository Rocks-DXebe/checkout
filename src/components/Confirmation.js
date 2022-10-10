import React from 'react'
import { useLocation,Link } from 'react-router-dom'

function Confirmation() {
  const location = useLocation()
  const { user,price } = location.state
  

  return (
  
    <strong>
    <h2>Order placed, thank you!</h2>
    <h3>Confirmation will be sent to your email</h3>
    <h4>Shipping to:</h4>
    <h5>{user.name}</h5>
    <h5>{user.address}</h5>
    <h5>{user.city}</h5>
    <h5>{user.postalcode}</h5>
    <h5>{user.country}</h5>
    <h5>{user.phone}</h5>
    <h3>Amount paid successfull :  {price}</h3>
    <div><h3>Deliver date, October 11</h3></div>
    <Link to="/"><button>Continue Shopping</button></Link>
    </strong>
    
  )
}

export default Confirmation
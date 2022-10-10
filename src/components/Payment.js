import React,{useState} from 'react'
import { Link, useLocation } from 'react-router-dom'

function Payment() {
    const location = useLocation()
    const { user,price } = location.state
    const [card, setCard] = useState({cardNumber:"",name:"",expiry:"",cvv:""})
    const handleInputs = (e) =>{console.log(e)
        setCard({...card,[e.target.id]:e.target.value})}
    

  return (
    <div>
        <h1>Amount to be Paid: {price}</h1>
        <form>
            <div>
                <label htmlFor="cardNumber">Card Number</label>
                <input type="number" id="cardNumber" placeholder="Enter card number"
                value={card.cardNumber}
                onChange={handleInputs} />
            </div>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Enter name" 
                value={card.name}
                onChange={handleInputs}/>
            </div>
            <div>
                <label htmlFor="expiry">Expiry</label>
                <input type="text" id="expiry" placeholder="Enter expiry" 
                value={card.expiry}
                onChange={handleInputs}/>
            </div>
            <div>
                <label htmlFor="cvv">CVV</label>
                <input type="number" id="cvv" placeholder="Enter cvv" 
                value={card.cvv}
                onChange={handleInputs}/>
            </div>
            <div>
                <label />
                <Link to="/confirmation" state= {{user: user,price: price}}>
                    <button className="primary" type="submit"> Continue</button>
                </Link>
                <Link to="/address"><button>Back</button></Link>
            </div>
        </form>
    </div>
  )
}

export default Payment
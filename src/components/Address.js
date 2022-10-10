import React,{useState} from 'react'
import {Link,useLocation} from 'react-router-dom'

function Address() {
    const location = useLocation()
    const { price } = location.state
    const [user, setUser] = useState({name:"",address1:"",city:"",postalcode:"",country:"",phone:""})
    
    const handleInputs = (e) =>{console.log(e)
    setUser({...user,[e.target.id]:e.target.value})}

  return (
    <div>
        <h1>Address</h1>
        <form >
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Enter name" 
                value={user.name}
                onChange={handleInputs}/>
            </div>
            <div>
                <label htmlFor="address">Address </label>
                <input type="text" id="address" placeholder="Enter address" 
                value={user.address}
                onChange={handleInputs} />
            </div>
            <div>
                <label htmlFor="city">City</label>
                <input type="text" id="city" placeholder="Enter city" 
                value={user.city}
                onChange={handleInputs} />
            </div>
            <div>
                <label htmlFor="postalcode">Postal Code</label>
                <input type="number" id="postalcode" placeholder="Enter postal code" 
                value={user.postalcode}
                onChange={handleInputs} />
            </div>
            <div>
                <label htmlFor="country">Country</label>
                <input type="text" id="country" placeholder="Enter country" 
                value={user.country}
                onChange={handleInputs}/>
            </div>
            <div>
                <label htmlFor="phone">Phone Number</label>
                <input type="number" id="phone" placeholder="Enter phone" 
                value={user.phone}
                onChange={handleInputs}/>
            </div>

            <div><h3>Deliver date, October 10</h3></div>
            <Link to= "/payment" state= {{user: user, price: price}} >
                <button className="primary" type="submit">Continue</button></Link>
            <Link to="/"><button>Back</button></Link>
        </form>
    </div>
  )
}

export default Address
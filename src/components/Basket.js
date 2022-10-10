import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';

export default function Basket(props) {
  
  const { cartItems, onAdd, onRemove } = props;
  var itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const [CoupounPrice, setCoupounPrice]= useState(0)
  const [code, setCode] = useState("")
  itemsPrice=itemsPrice-CoupounPrice
  useEffect(()=> {
if(code==="SHOPPING"){
	setCoupounPrice(3)
}
}, [code])

  const handleInputs = (e) =>{console.log(e)
    setCode(e.target.value) 
  }
   
  return (
    <aside className="block col-1">
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.name}</div>
            <div className="col-2">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{' '}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

            <div className="col-2 text-right">
              {item.qty} x ${item.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">Price</div>
              <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">CouponPrice</div>
              <div className="col-1 text-right">${CoupounPrice.toFixed(2)}</div>
              <label htmlFor="code">Gift Coupon</label>
                <input type="text" id="code" placeholder="Enter code" 
                value={code}
                onChange={handleInputs}/>
            </div>
            
            <hr />
            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>${itemsPrice.toFixed(2)}</strong>
              </div>
            </div>
            <div className="row" >
              <Link to = "/address" state= {{price: itemsPrice}} >
                <button>
                  Checkout
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}

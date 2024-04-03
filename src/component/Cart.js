import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link for navigation
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from './utils/cartSlice';
import cart from '../image/empty-cart.png'

function Cart() {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.cartItems);

    // Calculate total bill without GST
    let sum = 0
   const Total = cartItems.map((item)=>{
    sum += item.price
    return sum
   })
const subTotal = Total.sort((a,b)=>b-a) 
console.log(subTotal[0])
    // GST rate
    const gstRate = 0.18;
    
    // Calculate GST
    const gst = subTotal[0] * gstRate;

    // Calculate total bill including GST
    const totalBill = subTotal[0] + gst;

    const removeFromCart = (index) => {
        dispatch(removeItem(index));
    };

    
const checkOut=(myitems)=>{
    if(myitems===cartItems){
        localStorage.setItem('myData',JSON.stringify(cartItems))
    }

navigate("/cartHistory")
}


const [paymentMethod, setPaymentMethod] = useState('');

const handlePaymentChange = (e) => {
  setPaymentMethod(e.target.value);
};

    return (
        <div className="container py-5">
        <h1 className="text-center mb-4">Your Cart</h1>
        {cartItems.length === 0 ? (
            <div className="text-center">
                <img src={cart} alt="Empty Cart" style={{ width: '300px', height: '300px' }} />
                <p>Your cart is empty</p>
                <Link to="/" className="btn btn-primary">Order Now</Link>
            </div>
        ) : (
            <div className="row">
                <div className="col-12">
                    {cartItems.map((item, index) => (
                        <div key={index} className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={item.image} style={{ width: '100px', height: '100px' }} className="img-fluid rounded-start" alt={item.title} />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{item.title}</h5>
                                        <p className="card-text">Price: ${item.price}</p>
                                        <p className="card-text">Quantity: {item.quantity}</p>
                                        <button className="btn btn-outline-danger btn-sm" onClick={() => removeFromCart(index)}>Remove</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="text-end">
                        <h5>Subtotal: ${subTotal}</h5>
                        <h5>GST (18%): ${gst}</h5>
                        <h5>Total: ${totalBill}</h5>
                        {/* <button className="btn btn-primary" >Checkout</button> */}


                        <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
<div className="modal-dialog modal-dialog-centered">
<div className="modal-content">
  <div className="modal-header">
    <h5 className="modal-title" id="exampleModalToggleLabel">Modal 1</h5>
    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  </div>
  <div className="modal-body">
  <div className="container">
  <h2>Select Payment Method:</h2>
  <ul className="list-group">
    <li className="list-group-item">
      <input
        type="radio"
        id="cod"
        name="payment"
        value="cod"
        checked={paymentMethod === 'cod'}
        onChange={handlePaymentChange}
        className="form-check-input me-1"
      />
      <label htmlFor="cod" className="form-check-label">Cash on Delivery</label>
      <ul className="list-group mt-2">
        <li className="list-group-item">
          <input
            type="radio"
            id="cash"
            name="cod-option"
            value="cash"
            className="form-check-input me-1"
          />
          <label htmlFor="cash" className="form-check-label">Cash</label>
        </li>
        <li className="list-group-item">
          <input
            type="radio"
            id="card"
            name="cod-option"
            value="card"
            className="form-check-input me-1"
          />
          <label htmlFor="card" className="form-check-label">Card</label>
        </li>
        <li className="list-group-item">
          <input
            type="radio"
            id="upi"
            name="cod-option"
            value="upi"
            className="form-check-input me-1"
          />
          <label htmlFor="upi" className="form-check-label">UPI</label>
        </li>
      </ul>
    </li>
    <li className="list-group-item">
      <input
        type="radio"
        id="debit-card"
        name="payment"
        value="debit-card"
        checked={paymentMethod === 'debit-card'}
        onChange={handlePaymentChange}
        className="form-check-input me-1"
      />
      <label htmlFor="debit-card" className="form-check-label">Debit Card</label>
      {/* Similar options for Debit Card */}
    </li>
    <li className="list-group-item">
      <input
        type="radio"
        id="upi-payment"
        name="payment"
        value="upi-payment"
        checked={paymentMethod === 'upi-payment'}
        onChange={handlePaymentChange}
        className="form-check-input me-1"
      />
      <label htmlFor="upi-payment" className="form-check-label">UPI Payment</label>
      {/* Similar options for UPI Payment */}
    </li>
  </ul>
  {/* <button className="btn btn-primary mt-3" onClick={() => console.log("Selected payment method:", paymentMethod)}>Proceed</button> */}
</div>
  </div>
  <div className="modal-footer">
    <button className="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">Proceed</button>
  </div>
</div>
</div>
</div>
<div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
<div className="modal-dialog modal-dialog-centered">
<div className="modal-content">
  <div className="modal-header">
    {/* <h5 className="modal-title" id="exampleModalToggleLabel2">Modal 2</h5> */}
    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  </div>
  <div className="modal-body">
    Thank you for Shopping with us 
  </div>
  <div className="modal-footer">
    <button className="btn btn-primary"  data-bs-dismiss="modal" onClick={()=>checkOut(cartItems)} >See Order History</button>
  </div>
</div>
</div>
</div>
<a className="btn btn-primary" data-bs-toggle="modal" href="#exampleModalToggle" role="button">CheckOut</a>


                    </div>
                </div>
            </div>
        )}
    </div>
    );
}

export default Cart;

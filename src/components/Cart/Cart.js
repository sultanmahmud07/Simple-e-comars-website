import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './Cart.css'

const Cart = (props) => {
  const {cart} =props

  // Order side code here 
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for(const product of cart){
    quantity =quantity + product.quantity;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping
    // console.log(product.shipping)
  }
  const tex =parseFloat((total * 10 /100).toFixed(2));
  const grandTotal =total + shipping + tex;
  // console.log(tex)
  return (
    <div className='cart'>
      <h2 className='order-header'>Order Summary</h2>
        <p>Select iteme: {quantity}</p>
        <p>Total Price: ${total}</p>
        <p>Total Shipping Charge: ${shipping}</p>
        <p>Tex: ${tex}</p>
        <h4>Grand Total: ${grandTotal}</h4>
        <button className='order-btn' id='btn1'>Clear Cart
        <FontAwesomeIcon className='btn-icon' icon={faTrash} />
        </button>
        <button className='order-btn' id='btn2'>Review Order
        <FontAwesomeIcon className='btn-icon' icon={faArrowRight} />
        </button>
    </div>
  );
};

export default Cart;
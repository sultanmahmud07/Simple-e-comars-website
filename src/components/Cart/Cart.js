import React from 'react';

const Cart = (props) => {
  // const {cart} =props
  return (
    <div className='cart'>
      <h2>Order Summary</h2>
        <p>Select iteme: {props.cart.length}</p>
    </div>
  );
};

export default Cart;
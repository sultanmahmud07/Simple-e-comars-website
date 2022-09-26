import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'

const Product = (props) => {
  // console.log(props)
  const {HandlerAddToCart} = props
  const {name, price, ratings, img, category} = props.product
  // console.log(props.product)
  return (
    <div className='single-product'>
      <div className="imgae-container">
      <img src={img} alt="" onError={(e) => {
        e.currentTarget.src ="https://5.imimg.com/data5/CI/DI/GY/SELLER-32493408/00-500x500.jpg"
      }} />
      </div>
      <div className="card-info">
      <h3 className='p-title'>{name}</h3>
      <p className='price'>Price ${price}</p>
      <p className='catagoris'>Manufactur: {category}</p>
      <span className='rating'>Rating: {ratings}</span>
      </div>
      <button onClick={()=> HandlerAddToCart(props.product)} className='cart-btn'>
        <span className='btn-text'>Add To Cart</span>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
        
      </button>
    </div>
  );
};

export default Product;
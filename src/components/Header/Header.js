import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css'

const Header = () => {
  return (
    <nav className="nab-bg">
      <div className='nav-wrapper'>
        <img src={logo} alt="" />
        <div className='manu-bar'>
          <a href="/order">Order</a>
          <a href="/order review">Order Review</a>
          <a href="/inventory">Manage Inventory</a>
          <a href="/login">Login</a>
         
        </div>
      </div>
    </nav>
  );
};

export default Header;
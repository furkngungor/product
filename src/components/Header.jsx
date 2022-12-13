import React from 'react';
import logo from "../images/logo.svg";
import hamburgerLogo from "../images/icon-menu.svg";
import closeLogo from "../images/icon-close.svg";
import cartLogo from "../images/icon-cart.svg";
import deleteLogo from "../images/icon-delete.svg"
import profilePhoto from "../images/image-avatar.png";
import productThumb from '../images/image-product-1-thumbnail.jpg';


export default function Header({counter, remove, cart}) {
  const headerNav = document.querySelector(".header-nav");
  const cartSection = document.querySelector(".cart-section");

  function toggleNav() {
    headerNav.classList.toggle("show-nav");
  }

  function toggleCart() {
    cartSection.classList.toggle("show-cart");
  }

  return (
    <header className='Header'>
      <div className='header-brand'>
        <img src={hamburgerLogo} className='hamburger-logo' onClick={toggleNav} alt='hamburger-logo'></img>
        <img src={logo} className='logo' alt='website-logo'></img>
        <div className='header-nav'>
          <img src={closeLogo} className='close-logo' onClick={toggleNav} alt='close-button-logo'></img>
          <a href='localhost:3000'>Collections</a>
          <a href='localhost:3000'>Men</a>
          <a href='localhost:3000'>Women</a>
          <a href='localhost:3000'>About</a>
          <a href='localhost:3000'>Contact</a>
        </div>
      </div>
      <div className='user-section'>
        {cart === true && 
          <div className='cart-counter'>
            {counter}
          </div>
        }
        <img src={cartLogo} className='cart-logo' onClick={toggleCart} alt='cart-logo'></img>
        <img src={profilePhoto} className='profile-photo' alt='profile'></img>
      </div>
      <div className='cart-section'>
        <div className='cart-header'>
          <h5>Cart</h5>
        </div>
        {cart === true && 
        <div className='cart-info'>

          <div className='cart-product'>
            <img src={productThumb} className='cart-product-image' alt='shoe-thumbnail'></img>
            <div className='cart-product-info'>
              <h5>Fall Limited Edition Sneakers</h5>
              <h5>$125.00 x {counter} <b>${125 * counter}{".00"}</b></h5>
            </div>
            <img src={deleteLogo} className='delete-icon' alt='delete-icon' onClick={remove}></img>
          </div>
          <button className='add-cart-button'>Checkout</button>
          
        </div> }
        {cart === false && 
          <p className='empty'>Your cart is empty.</p>
        }
      </div>
    </header>
  )
}

import React, { useState } from 'react';
import prev from "../images/icon-previous.svg";
import next from "../images/icon-next.svg";
import productImageOne from "../images/image-product-1.jpg";
import productImageTwo from "../images/image-product-2.jpg";
import productImageThree from "../images/image-product-3.jpg";
import productImageFour from "../images/image-product-4.jpg";
import plus from "../images/icon-plus.svg";
import minus from "../images/icon-minus.svg";

export default function Product({increase, decrease, counter, add}) {
  const carouselItem = document.querySelectorAll(".carousel-item");
  const [carouselNum, setCarouselNum] = useState(0);

  function prevItem() {
    if (carouselNum === 0) {
      setCarouselNum(3);
    } else {
      setCarouselNum(carouselNum-1);
    }
    for (let index = 0; index < carouselItem.length; index++) {
      carouselItem[index].style.display = "none";
    }
    carouselItem[carouselNum].style.display = "block";
  }

  function nextItem() {
    if (carouselNum === 3) {
      setCarouselNum(0);
    } else {
      setCarouselNum(carouselNum+1);
    }
    for (let index = 0; index < carouselItem.length; index++) {
      carouselItem[index].style.display = "none";
    }
    carouselItem[carouselNum].style.display = "block";
  }

  function openOverlay() {
    const overlay = document.querySelector(".Overlay");
    overlay.style.display = "flex";
  }
  
  return (
    <section className='Product'>
      <div className='product-image'>
        <img src={productImageOne} className='carousel-item' alt='shoe'></img>
        <img src={productImageTwo} className='carousel-item' alt='shoe'></img>
        <img src={productImageThree} className='carousel-item' alt='shoe'></img>
        <img src={productImageFour} className='carousel-item' alt='shoe'></img>
        <button className='prev' onClick={prevItem}><img src={prev} alt='prev-button-logo'></img></button>
        <button className='next' onClick={nextItem}><img src={next} alt='next-button-logo'></img></button>
        <div className='carousel-control'>
          <div className='carousel-control-item'>
            <img src={productImageOne} className='carousel-control-item-image' onClick={openOverlay} alt='shoe'></img>
          </div>
          <div className='carousel-control-item'>
            <img src={productImageTwo} className='carousel-control-item-image' onClick={openOverlay} alt='shoe'></img>
          </div>
          <div className='carousel-control-item'>
            <img src={productImageThree} className='carousel-control-item-image' onClick={openOverlay} alt='shoe'></img>
          </div>
          <div className='carousel-control-item'>
            <img src={productImageFour} className='carousel-control-item-image' onClick={openOverlay} alt='shoe'></img>
          </div>
        </div>     
      </div>
      <div className='product-price'>
        <h2>Sneaker Company</h2>
        <h1>Fall Limited Edition Sneakers</h1>
        <p>
          These low-profile sneakers are your perfect casual wear companion. Featuring a 
          durable rubber outer sole, they’ll withstand everything the weather can offer.
        </p>
        <div className='price'>
          <h1>$125.00</h1>
          <h4>50%</h4>
          <h3>$250.00</h3>
        </div>
        <div className='counter'>
          <img src={minus} alt='minus' className='minus' onClick={decrease}></img>
          {counter}
          <img src={plus} alt='plus' className='plus' onClick={increase}></img>        
        </div>
        <button className='add-cart-button' onClick={add}><svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#69707D" fillRule="nonzero"/></svg> Add to cart</button>
      </div>
    </section>
  )
}

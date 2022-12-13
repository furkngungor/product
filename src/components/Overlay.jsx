import React, { useState } from 'react';
import productImageOne from "../images/image-product-1.jpg";
import productImageTwo from "../images/image-product-2.jpg";
import productImageThree from "../images/image-product-3.jpg";
import productImageFour from "../images/image-product-4.jpg";
import prev from "../images/icon-previous.svg";
import next from "../images/icon-next.svg";



export default function Overlay() {
  const ovCarouselItem = document.querySelectorAll(".overlay-carousel-item");
  const [ovCarouselNum, setOvCarouselNum] = useState(0);

  function prevOvItem() {
    if (ovCarouselNum === 0) {
      setOvCarouselNum(3);
    } else {
      setOvCarouselNum(ovCarouselNum-1);
    }
    for (let index = 0; index < ovCarouselItem.length; index++) {
      ovCarouselItem[index].style.display = "none";
    }
    ovCarouselItem[ovCarouselNum].style.display = "block";
  }

  function nextOvItem() {
    if (ovCarouselNum === 3) {
      setOvCarouselNum(0);
    } else {
      setOvCarouselNum(ovCarouselNum+1);
    }
    for (let index = 0; index < ovCarouselItem.length; index++) {
      ovCarouselItem[index].style.display = "none";
    }
    ovCarouselItem[ovCarouselNum].style.display = "block";
  }

  function changeOvItem(num) {
    for (let index = 0; index < ovCarouselItem.length; index++) {
      ovCarouselItem[index].style.display = "none";
    }
    ovCarouselItem[num].style.display = "block";
  }

  function closeOverlay() {
    const overlay = document.querySelector(".Overlay");
    overlay.style.display = "none";
  }

  return (
    <div className='Overlay'>
      <div className='overlay-content'>
        <button className='close-button' onClick={closeOverlay}>
          <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#69707D" fill-rule="evenodd"/></svg>
        </button>
        <div className='product-image'>
          <img src={productImageOne} className='overlay-carousel-item' alt='shoe'></img>
          <img src={productImageTwo} className='overlay-carousel-item' alt='shoe'></img>
          <img src={productImageThree} className='overlay-carousel-item' alt='shoe'></img>
          <img src={productImageFour} className='overlay-carousel-item' alt='shoe'></img>
          <button className='prev' onClick={prevOvItem}><img src={prev} alt='prev-button-logo'></img></button>
          <button className='next' onClick={nextOvItem}><img src={next} alt='next-button-logo'></img></button>
          <div className='carousel-control'>
            <div className='carousel-control-item' onClick={() => {changeOvItem(0)}}>
              <img src={productImageOne} className='carousel-control-item-image' alt='shoe'></img>
            </div>
            <div className='carousel-control-item' onClick={() => {changeOvItem(1)}}>
              <img src={productImageTwo} className='carousel-control-item-image' alt='shoe'></img>
            </div>
            <div className='carousel-control-item' onClick={() => {changeOvItem(2)}}>
              <img src={productImageThree} className='carousel-control-item-image' alt='shoe'></img>
            </div>
            <div className='carousel-control-item' onClick={() => {changeOvItem(3)}}>
              <img src={productImageFour} className='carousel-control-item-image' alt='shoe'></img>
            </div>
          </div>     
        </div>
      </div>
    </div>
  )
}

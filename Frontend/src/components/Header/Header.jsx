import React, { useState, useEffect } from 'react';
import './Header.css';
import { assets, food_list } from '../../assets/assets.js';

// Note: Make sure these images exist in your assets folder
const sliderData = [
  {
    image: assets.header_img, // Using the original header image
    title: "Order your favourite food here",
    description: "Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise.Our mission is to satisfy your carvings and elevate your dining experience, one delicious meal at a time.",
    buttonText: "View Menu"
  },
  {
    image: food_list[0].image, // Using breakfast category image
    title: "Start Your Day Right",
    description: "Choose from a diverse menu featuring a delectable array of breakfast dishes crafted with the finest ingredients and culinary expertise.",
    buttonText: "View Menu"
  },
  {
    image: food_list[6].image, // Using lunch category image
    title: "Lunch Time Specials",
    description: "Choose from a diverse menu featuring a delectable array of lunch options crafted with the finest ingredients and culinary expertise.",
    buttonText: "View Menu"
  },
  {
    image: food_list[12].image, // Using dinner category image
    title: "Dinner Delights",
    description: "Choose from a diverse menu featuring a delectable array of dinner dishes crafted with the finest ingredients and culinary expertise.",
    buttonText: "View Menu"
  },
  {
    image: food_list[9].image, // Using dessert category image
    title: "Sweet Endings",
    description: "Choose from a diverse menu featuring a delectable array of desserts crafted with the finest ingredients and culinary expertise.",
    buttonText: "View Menu"
  }
];

const Header = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  return (
    <div className='header'>
      <div className='slider-container'>
        {sliderData.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{
              background: `url(${slide.image})`,
              transform: `translateX(${(index - currentSlide) * 100}%)`
            }}
          >
            <div className='header-contents'>
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
              <button>{slide.buttonText}</button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="slider-dots">
        {sliderData.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`dot ${currentSlide === index ? 'active' : ''}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Header;
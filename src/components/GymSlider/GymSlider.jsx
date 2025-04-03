import React, { useState } from "react";
import "./GymSlider.css";

const slides = [
  {
    id: 1,
    url: "/wellify/images/gymslider/invictus-go1.png",
    link: "https://invictusgo.kz",
  },
  {
    id: 2,
    url: "/wellify/images/gymslider/iron-club1.png",
    link: "https://ironclub.kz/gym",
  },
  {
    id: 3,
    url: "/wellify/images/gymslider/underground1.png",
    link: "https://undergroundgym.kz",
  },
];

const GymSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  const handleMoreInfo = () => {
    window.open(slides[currentSlide].link, "_blank");
  };

  return (
    <div className="gym-slider">
      <div className="slider-header">ТРЕНАЖЕРНЫЕ ЗАЛЫ</div>

      <div className="slider-container">
        <div className="slider-controls">
          <button onClick={prevSlide} className="slider-btn prev-btn">
            &#10094;
          </button>

          <div className="image-container">
            <img
              src={slides[currentSlide].url}
              alt={`Slide ${currentSlide + 1}`}
              className="slider-image"
            />
            <button onClick={handleMoreInfo} className="more-info-btn">
              Подробнее
            </button>
          </div>

          <button onClick={nextSlide} className="slider-btn next-btn">
            &#10095;
          </button>
        </div>

        <div className="slider-dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GymSlider;

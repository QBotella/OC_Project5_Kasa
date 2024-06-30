import { useState } from "react"

const Slider = ({ pictures, title }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = pictures.length

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides)
  }

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides)
  }

  return (
    <div className="slider">
      {totalSlides > 1 && (
        <button onClick={goToPrevSlide} className="slider-button prev-button">
          <img
            className="icon"
            src="/src/assets/img/arrow_left.png"
            alt="arrow left"
          ></img>
        </button>
      )}
      <img src={pictures[currentSlide]} alt={`${title} ${currentSlide + 1}`} />
      {totalSlides > 1 && (
        <button onClick={goToNextSlide} className="slider-button next-button">
          <img
            className="icon"
            src="/src/assets/img/arrow_right.png"
            alt="arrow right"
          ></img>
        </button>
      )}
      {totalSlides > 1 && (
        <div className="slider__number">
          <p>
            {currentSlide + 1} / {totalSlides}
          </p>
        </div>
      )}
    </div>
  )
}

export default Slider

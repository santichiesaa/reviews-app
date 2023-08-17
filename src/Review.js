import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const {name, job, image, text} = people[index]
  
  function prevPerson() {
    setIndex((index) => {
      let newIndex = index - 1;
      if (newIndex < 0) {
        newIndex = people.length -1
      }
      return newIndex;
    })
  }
function nextPerson() {
  setIndex((index) => {
    let newIndex = index + 1;
    if (newIndex >= people.length) {
      newIndex = 0
    }
    return newIndex;
  })
}
function randomPerson() {
  setIndex((index) => {
    let randomIndex = Math.floor(Math.random() * people.length)
    return randomIndex;
  })
}
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img"/>
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
        </div>
        <h4 className="author">{name}</h4>
        <h5 className="job">{job}</h5>
        <p className="info">{text}</p>
        <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
        </div>
        <button className="random-btn" onClick={randomPerson}>Surprise Me</button>
    </article>
  )
};

export default Review;

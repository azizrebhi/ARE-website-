import React, { useEffect, useRef } from 'react';
import './EventCards.css'; // Import the CSS for styling
import family2 from './assets/family2.png';
import family3 from './assets/family3.jpg';
import family4 from './assets/family4.jpg';

const events = [
  {
    title: 'Robocup',
    date: 'October 13, 2024',
    description: 'Join us for a day of tech talks and networking.',
    image: family4 // Ensure you have these images in your assets folder
  },
  {
    title: 'Roboday',
    date: 'November 2024',
    description: 'Hands-on workshop on robotics for beginners.',
    image: family2
  },
  {
    title: 'Botcamp',
    date: 'November 20, 2024',
    description: 'Explore the latest advancements in Artificial Intelligence.',
    image: family3
  }
];

const EventCards = () => {
  const titleRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const options = {
      threshold: 0.5, // Trigger when 50% of the element is in view
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        } else {
          entry.target.classList.remove('animate');
        }
      });
    }, options);

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    cardRefs.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
      cardRefs.current.forEach((card) => {
        if (card) {
          observer.unobserve(card);
        }
      });
    };
  }, []);

  return (
    <div className='comp'>
      <h1 ref={titleRef} className="title">Discover our latest Events </h1>
      <div className="event-cards-container">
        {events.map((event, index) => (
          <div 
            key={index} 
            className="event-card" 
            ref={(el) => (cardRefs.current[index] = el)}
          >
            <img src={event.image} alt={event.title} className="event-image" />
            <div className="event-details">
              <h3 className="event-title">{event.title}</h3>
              <p className="event-date">{event.date}</p>
              <p className="event-description">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCards;

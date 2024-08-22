import React, { useState, useEffect, useRef } from 'react';
import './BadgeCount.css';

const BadgeCount = () => {
  const [members, setMembers] = useState(0);
  const [awards, setAwards] = useState(0);
  const [partners, setPartners] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const badgeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing once the animation starts
        }
      });
    });

    if (badgeRef.current) {
      observer.observe(badgeRef.current);
    }

    return () => {
      if (badgeRef.current) {
        observer.unobserve(badgeRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const incrementCounts = () => {
        setTimeout(() => {
          if (members < 50) setMembers((prev) => prev + 1);
          if (awards < 15) setAwards((prev) => prev + 1);
          if (partners < 5) setPartners((prev) => prev + 1);
        }, 50); // Adjust speed here
      };

      const interval = setInterval(incrementCounts, 50);

      return () => clearInterval(interval);
    }
  }, [isVisible, members, awards, partners]);

  return (
    <div className={`stats-badge ${isVisible ? 'slide-in' : ''}`} ref={badgeRef}>
      <div className="stat-item">
        <h3>{members}</h3>
        <p>Members</p>
      </div>
          <div className="stat-item">
              <h3>{awards}</h3>
              
        <p>Awards</p>
      </div>
      <div className="stat-item">
        <h3>{partners}</h3>
        <p>Partners</p>
      </div>
    </div>
  );
};

export default BadgeCount;

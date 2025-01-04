import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate, onTimerEnd }) => {
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate) - new Date();
      let timeLeft = {};
  
      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        };
      } else {
        onTimerEnd(); // Вызываем функцию, когда таймер заканчивается
      }
      return timeLeft;
    };
  
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  
    useEffect(() => {
      const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
  
      return () => clearInterval(timer);
    }, []);
    
  return (
    <div>
      {timeLeft.days !== undefined ? (
        <div>
          <h1>{timeLeft.days}:{timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}</h1>
        </div>
      ) : (
        <h1>С днем рождения!</h1>
      )}
    </div>
  );
};

export default CountdownTimer;
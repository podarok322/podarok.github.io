import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import CountdownTimer from './CountdownTimer';
import SecondPage from './SecondPage'; // Импортируйте вашу вторую страницу


const App = () => {
  const [isTimerEnded, setIsTimerEnded] = useState(false);

  return (
    <Router>
      <div className="time">
        <Routes>
          <Route path="/" element={
            <>
              <CountdownTimer 
                targetDate="2025-01-03T19:20:00" 
                onTimerEnd={() => setIsTimerEnded(true)} 
              />
              {isTimerEnded && (
                <Link to="/second-page">
                  <button class="raise">Получить подарок</button>
                </Link>
              )}
            </>
          } />
          <Route path="/second-page" element={<SecondPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import Passcode from './components/Passcode';
import Recap from './components/Recap';
import Question from './components/Question';
import Picture from './components/Picture';
import PageNotFound from '../PageNotFound';
// import Letter from './components/Letter';

export const Home = () => (

  <div className="fixed inset-0 z-0 pointer-events-none">
    <div className="heart-container">
      {Array.from({ length: 30 }).map((_, index) => {
        const left = Math.random() * 100; // Random horizontal position
        const top = Math.random() * 100; // Random vertical position
        const delay = Math.random() * 5; // Random animation delay
        return (
          <div
            key={index}
            className="heart"
            style={{ left: `${left}%`, animationDelay: `${delay}s`, top: `${top}%` }}
          >
            <FaHeart className='text-6xl text-pink-600 animate-pulse' />
          </div>
        );
      })}
    </div>
  </div>
);

const App = () => {
  
  return (
    <Router>
      <Home />
      <div className="relative z-10">
        <Routes>
          <Route exact path="/" element={<Passcode />} />
          <Route path='/recap' element={<Recap />} />
          <Route path='/question' element={<Question />} />
          <Route path='/recap/pictures' element={<Picture />} />
          {/* <Route path='/recap/letter' element={<Letter />} /> */}
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
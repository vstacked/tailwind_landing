import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Tutorial from './components/Tutorial';
import Cards from './components/Cards';
import ScrollToTop from 'react-scroll-up';
import { FiArrowUpCircle } from 'react-icons/fi';

function App() {
  return (
    <div className="App">
      <ScrollToTop showUnder={160}>
        <FiArrowUpCircle size={30} color='#00df9a' />
      </ScrollToTop>
      <div className="bg-hero bg-cover bg-center">
        <div className='backdrop-blur-md'>
          <Navbar />
          <Hero />
        </div>
      </div>
      <Tutorial />
      <Cards />
    </div>
  );
}

export default App;

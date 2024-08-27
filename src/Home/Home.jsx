import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import styles from '../style/style';
import Business from './components/business';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Business/>
      
    </div>
  )
}

export default Home;

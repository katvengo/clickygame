import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Rows from './components/rows';

import Weather from './components/images/notebook.png'

const styles = {
  hero: {
    backgroundImage: `url(${ Weather })`
  },

};

function App() {
  return (
    <div style={styles.hero}>
      <Navbar/>
      <Hero />
      <Rows   />
    </div>
  );
}

export default App;

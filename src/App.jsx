import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Shoes from './components/Shoes/Shoes';
import Head from './components/Side-Head/Head';  
const App = () => {
  return (
    <div>
      <Navbar />
      <Head/>
      <Shoes/>
    </div>
  );
};

export default App;

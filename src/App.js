import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Services from './Services';
import Contact from './Contact';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Services/>
      <Contact/>
      
    </div>
  );
}

export default App;

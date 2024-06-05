import './App.css';
import Header from './Components/Header.jsx';
import Home from './Components/Home.jsx';
import About from './Components/About.jsx';
import Certification from './Components/Certification.jsx';
import { useState } from 'react';
import Project from './Components/Project.jsx';
import React from 'react';
function App() {
  const [percent, setPercent] = useState(0);
  
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Certification />
      <Project />
    </div>
  );
}

export default App;

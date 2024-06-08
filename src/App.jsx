import './App.css';
import Header from './Components/Header.jsx';
import { useState } from 'react';
import React from 'react';
import ProjectSeper from './Components/ProjectsSeper.jsx';
import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom';
import Main from './Components/Main.jsx';
import Blogs from './Components/Blogs.jsx';
import Resume from './Components/Resume.jsx';


function App() {
  const [percent, setPercent] = useState(0);
  
  return (
    <div className="App">
      <Header /> 
      <Main />
      <Blogs />
      <Resume />
    </div>
  );
}

export default App;

import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import MockupPage from './pages/MockupPage';
import DescribingTheUI from './pages/DescribingTheUI';
import FirstComponent from './pages/FirstComponent';

const App = () => {
  
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element=<HomePage/> />
          <Route path='/mockup(json)' element=<MockupPage/> />
          <Route path='/describing-the-UI' element=<DescribingTheUI /> />
          <Route path='/describing-the-UI/your-first-component' element=<FirstComponent /> />
        </Routes>
      </Router> 
      
    </div>
  )
}

export default App

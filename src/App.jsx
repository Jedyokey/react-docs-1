import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import MockupPage from './pages/MockupPage';

const App = () => {
  
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element=<HomePage/> />
          <Route path='/mockup(json)' element=<MockupPage/> />
        </Routes>
      </Router> 
      
    </div>
  )
}

export default App

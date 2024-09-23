import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import MockupPage from './pages/MockupPage';
import DescribingTheUI from './pages/DescribingTheUI';
import FirstComponent from './pages/FirstComponent';
import ConditionalPage from './pages/ConditionalPage';
import RenderListPage from './pages/RenderListPage';
import PurityPage from './pages/PurityPage';
import UIasAtree from './pages/UIasAtree';

const App = () => {
  
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element=<HomePage/> />
          <Route path='/mockup(json)' element=<MockupPage/> />
          <Route path='/describing-the-UI' element=<DescribingTheUI /> />
          <Route path='/describing-the-UI/passing-props-to-a-component' element=<FirstComponent /> />
          <Route path='/describing-the-UI/conditional-rendering' element=<ConditionalPage /> /> 
          <Route path='/describing-the-UI/rendering-list' element=<RenderListPage /> />
          <Route path='/describing-the-UI/keeping-components-pure' element=<PurityPage /> />
          <Route path='/describing-the-UI/your-UI-as-a-tree' element=<UIasAtree /> /> 
        </Routes>
      </Router> 
      
    </div>
  )
}

export default App

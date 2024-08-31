import React from 'react'
import QuickStart from './components/QuickStart'
import MyButton from './components/MyButton'
import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1);
  }
  
  return (
    <div>
      <QuickStart /><br />
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
      
    </div>
  )
}

export default App

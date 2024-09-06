import React, { useState } from 'react'
import QuickStart from '../components/QuickStart'
import MyButton from '../components/MyButton'
import Game from '../components/Game'

const HomePage = () => {
    const [count, setCount] = useState(0)

    const handleClick = () => {
        setCount(count + 1);
    }

  return (
    <div>
      <QuickStart /><br />
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} /><br />
      <Game />
    </div>
  )
}

export default HomePage

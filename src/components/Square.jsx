import React from 'react'

const Square = ({value, onSquareClick}) => {
    // const [value, setValue] = useState(null);
    // const handleClick = () => {
    //     // console.log("clicked!");
    //     setValue("X");
    // }

  return ( 
    <div>
      <button className="square" onClick={onSquareClick}>{value}</button> 
    </div>
  )
}

export default Square

import React from 'react'

const Gallery = ({image, alt}) => {

  return (
    <div> 
      {/* <img 
      src="https://i.pinimg.com/236x/c1/1e/9d/c11e9d4e50756879b0bad390e6f57067.jpg" 
      alt="Michael's Profile-Pic" /> */}

      {/* // props passed from DescribingTheUI.jsx */}
      <img src={image} alt={alt} /> 
      
    </div>
  )
}

export default Gallery

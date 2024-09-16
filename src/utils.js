// import React from 'react'

const getImageUrl = () => {
  return (
      "https://i.pinimg.com/236x/5d/14/df/5d14df25a3f1ca3f113f6b486d70b338.jpg" 
  );
}

export default getImageUrl

export const getAnotherImage = (person, size = "s") => {
  return (
    "https://i.imgur.com/" + person.imageId + size + ".jpg"
  )
} 

export const getAnImage = (person, size = "s") => {
  return (
    "https://i.imgur.com/" + person.imageId + size + ".jpg"
  )
}

export const getSomeImage = (imageId, size = "s") => {
  return (
    "https://i.imgur.com/" + imageId + size + ".jpg"
  )
}

export const getAnImage2 = (person, size) => {
  return (
    "https://i.imgur.com/" + person.imageId + size + ".jpg"
  )
}
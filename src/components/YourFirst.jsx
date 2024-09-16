import React from 'react'

export const MyProfile = () => {
  return (
    <img 
    src="https://i.pinimg.com/474x/77/6b/23/776b2359199d824198f810f32a8b2325.jpg" 
    alt="My_Avatar" 
    style={{
      width: "100px", 
      height: "100px", 
      borderRadius: "50%"
    }}
    /> 
  )
}

const today = new Date();

const formatDate = (date) => {
  // const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  // const options2 = {weekday: "long"}
  // return date.toLocaleDateString('en-US', options);

  return new Intl.DateTimeFormat(
    "en-US", 
    {weekday: "long"}
  ).format(date)
}

const person = {
  baseUrl: 'https://i.imgur.com/',
  name: 'Gregorio Y. Zara',
  imageId: '7vQD0fP',
  imageSize: 's',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};


const YourFirst = () => {
  const name = "Jedy++"

  return (
    <div>
      <MyProfile />
      <h3>{name} Today's Tasks</h3>

      <h2>To do list for {formatDate(today)}</h2>

      <img 
      src={person.baseUrl + person.imageId + person.imageSize + ".jpg"}
      alt={person.name} 
      />
    </div>
  )
}

export default YourFirst
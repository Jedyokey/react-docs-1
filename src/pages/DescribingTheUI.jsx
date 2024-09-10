import React from 'react'
import Gallery from '../components/Gallery'
import Profile from '../components/Profile'
import Profile2 from '../components/Profile2'
import Condi from '../components/Condi'
import Lists from '../components/Lists'
import Teaset from '../components/Teaset'

const DescribingTheUI = () => {
  return (
    <div className='ui-box'>
        <section>
            <h1>Gallery - Describing the UI</h1>
            <div className='profile'>
                <Gallery image="https://i.pinimg.com/236x/a4/25/dd/a425dd2232acf11196e99c2ff3b37cb4.jpg"
                alt="Michael's Profile-Pic" />
                <Gallery 
                image="https://i.pinimg.com/236x/31/b9/53/31b9534e83f102e638c37755414faf97.jpg"
                alt="Paul's Profile-Pic" />
                <Gallery 
                image="https://i.pinimg.com/236x/76/e9/c4/76e9c459aad7cb3ef0f8ffd2d1eeb817.jpg"
                alt="Victor's Profile-Pic" />
            </div>

            <Profile />
            <Profile2 />
            <Condi />
            <Lists />
            <Teaset />
        </section>

    </div>
  )
}

export default DescribingTheUI

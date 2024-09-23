import React from 'react'
import Purity from '../components2/Purity'
import Guest from '../components2/Guest'
import FixClock from '../components2/PurePractice1'
import PurePractice2 from '../components2/PurePractice2'
import Story from '../components2/PurePractice3'

const PurityPage = () => {
  return (
    <div>
        <h1>Purity: Components as formulas </h1>
        <Purity />

        <h1>Guest: Components as data sources </h1>
        <Guest />

        <h2>Challenge 1 of 3: Fix a broken clock </h2>
        <FixClock />

        <h2>Challenge 2 of 3: Fix a broken profile</h2>
        <PurePractice2 />

        <h2>Challenge 3 of 3: Fix a broken story tray </h2>
        <Story />
    </div>
  )
}

export default PurityPage

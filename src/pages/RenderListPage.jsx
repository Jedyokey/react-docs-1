import React from 'react'
import RenderingList from '../components2/RenderingList'
import List from '../components2/Practice2'
import ListPractice2 from '../components2/Practice3'
import RecipeList from '../components2/Practice4'
import Poem from '../components2/Practice5'

const RenderListPage = () => {
  return (
    <div>
        <h1>Rendering Lists</h1>
        <RenderingList />
        {/* Add more components as needed */}
        <List />
        <ListPractice2 />
        <RecipeList />
        <Poem />
    </div>
  )
}

export default RenderListPage

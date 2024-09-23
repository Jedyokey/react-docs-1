import React from 'react'

const StoryTray = ({stories}) => {
    let myStories = [...stories];
    myStories.push({
        id: "create",
        label: "Create Story",
    });
    
  return (
    <div>
        <ul className="story-list">
            {myStories.map((story) => (
                <li key={story.id}>
                    {story.label}
                </li>
            ))}  
        </ul>
    </div>
  ) 
}

export default StoryTray

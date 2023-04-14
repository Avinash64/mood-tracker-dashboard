import React from 'react'
import "./MoodCountSummary.css"
function MoodCountSummary(props) {
  return (
    <div className='card text-dark border-primary mb-3 countSummary'>
    
    <div className='card-header  mb-0'>{props.mood}</div>
    <div className="card-body">{props.count}</div>
    </div>
  )
}

export default MoodCountSummary
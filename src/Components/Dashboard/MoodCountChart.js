import React from 'react'
import "./MoodCountChart.css"

function MoodCountChart(props) {
  return (
    <div className='MoodCountChartPage'>
  <div className='lab'>
    <span className="badge badge-info">{Math.round(props.count)}</span>
    <div className='MoodName'>{props.mood}</div>
  </div>
<div className="progress">
  <div className="progress-bar" role="progressbar" style={{width: `${props.percent}%`}} aria-valuenow={`${props.percent}%`} aria-valuemin="0" aria-valuemax="100"></div>
</div>
    </div>
  )
}

export default MoodCountChart
import React from 'react'
import {useLocation} from 'react-router-dom';


function SingleMood(props) {
const location = useLocation();
  return (
    <div>
<div>{location.state.id}</div>

<div>{location.state.mood}</div>

<div>{location.state.tags}</div>
    </div>
  )
}

export default SingleMood
import React from 'react'
import "./MoodInput.css"
import {useNavigate} from "react-router-dom"

function MoodInput() {
  const navigate = useNavigate();
  return (
    <div className='MoodInputPage'>
    <h1 className='prompt'>How are you feeling today?</h1>
    <div className='MoodInput'>
          <span className='labels'>
            <div className='mood'>Awful</div>
            <div className='mood'>Bad</div>
            <div className='mood'>Ok</div>
            <div className='mood'>Good</div>
            <div className='mood'>Great</div>
          </span>
        <div className='mi'>
        <input type="range" className="form-range w-100 p-3" min="1" max="5" step="1" id="CustomRange" onMouseUp={(e) => console.log(e.target.value)}></input>

        </div>
    </div>
    <button type="button" value={3} className="btn btn-dark w-50" onClick={()=>navigate("dashboard")}>Submit</button>
    </div>
  )
}

export default MoodInput
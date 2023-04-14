import React from 'react'
import "./MoodBar.css"
function MoodBar(props) {
    return (
        <div className='MoodBar'>
            <div className='labels'>
                {
                    props.data.map((value, index) => {
                        return <div key={index} style={{color: value.color }}>{value.moodName}</div>
                    }
                    )}
            </div>
            <div className="progress">
                {
                    props.data.map((value, index) => {
                        return <div key={index} className="progress-bar" role="progressbar" style={{ width: `${value.width}%`, backgroundColor: value.color }} aria-valuenow={`${value.width}%`} aria-valuemin="0" aria-valuemax="100"></div>
                    }
                    )}
            </div>
        </div>
    )
}

export default MoodBar
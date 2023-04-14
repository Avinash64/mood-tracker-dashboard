import React from 'react'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "./SingleMood.css"

function SingleMood() {
    const navigate = useNavigate()
    const location = useLocation();
    return (
        <div className='singlePage'>
            <div className='singleMoodItem'>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" >id</span>
                    </div>
                    <input type="text" className="form-control" placeholder="id" value={location.state.id} aria-label="id" readOnly={true} />
                </div>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" >mood</span>
                    </div>
                    <input type="text" className="form-control" placeholder="Mood" value={location.state.mood} aria-label="Mood" readOnly={true} />
                </div>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" >tags</span>
                    </div>
                    <input type="text" className="form-control" placeholder="tags" defaultValue={location.state.tags.join(", ")} aria-label="tags"/>
                </div>



            <div className='buttons'>
                <button type="button" className="btn btn-primary" onClick={() => navigate("/moods")}>Save</button>

                <button type="button" className="btn btn-danger" onClick={() => navigate("/moods")}>Delete</button>
            </div>
            </div>
        </div>
    )
}

export default SingleMood
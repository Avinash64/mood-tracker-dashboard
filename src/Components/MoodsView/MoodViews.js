import React from 'react'
import './MoodViews.css'
import { useNavigate } from 'react-router-dom'


let fakeData = [
    { id: "id", mood: 1, tags: ["Tag1", "Tag2"] },
    { id: "id", mood: 3, tags: ["Tag1", "Tag2"] },
    { id: "id", mood: 4, tags: ["Tag1", "Tag2"] },
    { id: "id", mood: 2, tags: ["Tag1", "Tag2"] },
    { id: "id", mood: 3, tags: ["Tag1", "Tag2"] },
    { id: "id", mood: 1, tags: ["Tag1", "Tag2"] },
    { id: "id", mood: 5, tags: ["Tag1", "Tag2"] },
    { id: "id", mood: 3, tags: ["Tag1", "Tag2"] },
    { id: "id", mood: 2, tags: ["Tag1", "Tag2"] },
    { id: "id", mood: 1, tags: ["Tag1", "Tag2"] },
]

let moods = ["Awful", "Bad", "Ok", "Good", "Great"]


function MoodViews() {
    const navigate = useNavigate();



    return (
        <div className='MoodViewsPage'>
            <ul className="list-group mood-list">
                <li className="list-group-item list-group-item-action moodItem">
                    <div className='moodProperty'>Id</div>
                    <div className='moodProperty'>Mood</div>
                    <div className='moodProperty'>Tags</div>
                </li>
                {fakeData.map((value, index) => {
                    var id = Math.floor(Math.random() * 10000);
                    return <li key={index} className="list-group-item list-group-item-action moodItem" onClick={() =>
                        navigate("/edit", { state: { id: id, mood: moods[value.mood - 1], tags: value.tags } })}
                    >
                        <div className='moodProperty'>{id}</div>
                        <div className='moodProperty'>{moods[value.mood - 1]}</div>
                        <div className='moodTags'>
                            {value.tags.map((value, index) => {
                                return <span key={index} className="badge badge-secondary">{value}</span>
                            })}

                        </div>
                    </li>
                }

                )}

            </ul>
        </div>
    )
}

export default MoodViews
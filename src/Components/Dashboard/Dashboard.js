import React, { useEffect, useState } from 'react'
import "./Dashboard.css"
import MoodCountSummary from './MoodCountSummary'
import MoodCountChart from './MoodCountChart';
import MoodBar from './MoodBar';

let fakeData = [
  { mood: 1, tags: [] },
  { mood: 3, tags: [] },
  { mood: 4, tags: [] },
  { mood: 2, tags: [] },
  { mood: 3, tags: [] },
  { mood: 1, tags: [] },
  { mood: 5, tags: [] },
  { mood: 3, tags: [] },
  { mood: 2, tags: [] },
  { mood: 1, tags: [] },
]

let moods = [
  { id: 1, moodName: "Awful", color: "red" },
  { id: 2, moodName: "Bad", color: "gold" },
  { id: 3, moodName: "Ok", color: "white" },
  { id: 4, moodName: "Good", color: "aqua" },
  { id: 5, moodName: "Great", color: "limegreen" },
]

function Dashboard() {
  const [data, setData] = useState(fakeData);

  var getMoodCount = (data, mood) => {
    return data.filter(x => x.mood === mood).length;
  }

  var getMoodPercent = (data, mood) => {
    return (data.filter(x => x.mood === mood).length / data.length) * 100;
  }

  var generateData = (amount = 10) => {
    for (let i = 0; i < amount; i++) {
      fakeData.push({ mood: Math.ceil(Math.random() * 5), tags: [] });
      setData([...fakeData]);
    }
  }
  return (
    <div className='DashboardPage'>
      <div className='CountSummaries'>
        {moods.map((value, index) => {
          return <MoodCountSummary key={index} mood={value.moodName} count={getMoodCount(data, value.id)} />
        })}
      </div>

      <div className='CountCharts'>
        {moods.map((value, index) => {
          return <MoodCountChart key={index} mood={value.moodName} percent={getMoodPercent(data, value.id)} count={getMoodCount(data, value.id)} />
        })}
      </div>

      <MoodBar data={
        moods.map((value, index) => {
          return { width: getMoodPercent(data, value.id), color: value.color, moodName: value.moodName }
        })
      } />
      <button onClick={() => generateData(1000)}>Generate</button>




    </div>
  )
}

export default Dashboard
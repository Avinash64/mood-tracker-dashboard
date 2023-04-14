import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import MoodInput from './Components/MoodInput/MoodInput';
import Header from './Components/Header/Header';
import Dashboard from './Components/Dashboard/Dashboard';
import MoodViews from './Components/MoodsView/MoodViews';
import SingleMood from './Components/SingleMood/SingleMood';

function App() {
  return (
    <div className="App">
            <BrowserRouter>
      <Header/>
      <Routes>
      <Route exact path="/" element={<MoodInput/>}/>
      <Route exact path="/dashboard" element={<Dashboard/>}/>
      <Route exact path="/moods" element={<MoodViews/>}/>
      <Route exact path="/edit" element={<SingleMood/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

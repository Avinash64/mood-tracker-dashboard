import logo from './logo.svg';
import './App.css';
import MoodInput from './Components/MoodInput/MoodInput';
import Header from './Components/Header/Header';
import Dashboard from './Components/Dashboard/Dashboard';
import MoodViews from './Components/MoodsView/MoodViews';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <MoodInput/> */}
      {/* <Dashboard/> */}
      <MoodViews/>
    </div>
  );
}

export default App;

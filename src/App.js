
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Components/HomePage/HomePage';
import NavBar from './Components/NavBar/NavBar';
import WatchPage from './Components/WatchPage/WatchPage';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>

        <Route path='/watchPage/:id' element={<WatchPage/>}/>
      </Routes>
    
    </div>
  );
}

export default App;

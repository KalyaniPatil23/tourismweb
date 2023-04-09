import './App.css';
import Navbar from './Component/Navbar';
import Home from './Pages/Home';
import Surfing from './Pages/Surfing';
import Hula from './Pages/Hula';
import Vulcano from './Pages/Vulcano';
import BookTrip from './Pages/BookTrip';
import{Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/surfing' element={<Surfing/>}/>
        <Route path='/hula' element={<Hula/>}/>
        <Route path='/vulcano' element={<Vulcano/>}/>
        <Route path='/book/trip' element={<BookTrip/>}/>
      </Routes>
    </div>
  );
}

export default App;

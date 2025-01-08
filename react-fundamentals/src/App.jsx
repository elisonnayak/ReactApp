import { Route, Routes } from 'react-router-dom';
import './assets/css/app.css'
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import NavBar from './components/NavBar';

function App() {
  const movieNumber = 1;
  return (
    <div>
    <NavBar></NavBar>
    <main className='main-content'>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/favorites' element={<Favorites/>}></Route>
        </Routes>
    </main>
    </div>
  );
}
export default App;

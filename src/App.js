
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';

function App() {
  return (
    <> 
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/skill' element={<Skills/>}/>
    </Routes>
    </>
  );
}

export default App;

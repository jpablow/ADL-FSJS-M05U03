import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavbarComp from './components/NavbarComp';
import Home from './views/Home';
import Pokemones from './views/Pokemones';
import Pokemon from './components/Pokemon';

function App() {
  return (
    <BrowserRouter>
      <NavbarComp />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/pokemones/" element={<Pokemones />} />
        <Route path="/pokemones/:pokemon" element={<Pokemon />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

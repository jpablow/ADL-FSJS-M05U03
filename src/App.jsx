import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import NavbarComp from './components/NavbarComp';
import Home from './views/Home';
import Pokemones from './views/Pokemones';
import Pokemon from './components/Pokemon';
import { Provider } from './PokeContext';

function App() {
  return (
    <Provider>
      <NavbarComp />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemones/" element={<Pokemones />} />
        <Route path="/pokemones/:pokemonName" element={<Pokemon />} />
      </Routes>
    </Provider>
  );
}

export default App;

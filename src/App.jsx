import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavbarComp from './components/NavbarComp';
import Home from './views/Home';
import Pokemones from './views/Pokemones';

function App() {
  return (
    <BrowserRouter>
      <NavbarComp />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/pokemones/" element={<Pokemones />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

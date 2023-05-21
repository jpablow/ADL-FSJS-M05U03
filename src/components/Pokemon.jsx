import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

export default function Pokemones() {
  const [options, setOptions] = useState([]);
  const [pokemon, setPokemon] = useState('');
  const navigate = useNavigate();
  const url = 'https://pokeapi.co/api/v2/pokemon/';

  const getOptions = async () => {
    const resp = await fetch(url);
    const data = await resp.json();
    const results = data.results.map((d) => d.name);
    setOptions(results);
  };

  useEffect(() => {
    return () => {
      getOptions();
    };
  }, []);

  return (
    <Container className="mt-4 text-center poke p-4">
      <h2>charmander</h2>

      <Container className="mt-4 p-4 text-center d-flex justify-content-center align-items-center">
        <Image
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg"
          className="pokeImg"
        />

        <div className="text-start m-4" id="pokeData">
          <ul>
            <li>hp: 39</li>
            <li>attack: 52</li>
            <li>defense: 43</li>
            <li>special-attack: 60</li>
            <li>special-defense: 50</li>
            <li>speed: 65</li>
          </ul>
        </div>
      </Container>
    </Container>
  );
}

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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

  const verPokemon = async () => {
    pokemon
      ? navigate(`/pokemones/charmander`) // ${pokemon}
      : alert(
          'Debes seleccionar un pokemón para ver su información, intenta nuevamente.'
        );
  };

  useEffect(() => {
    return () => {
      getOptions();
    };
  }, []);

  return (
    <Container className="text-center">
      <h1 className="mt-4">Selecciona un pokemón</h1>

      <Form.Select
        aria-label="Default select example"
        className="mt-4"
        defaultValue={'x'}
        onChange={(e) => setPokemon(e.target.value)}
      >
        <option disabled value={'x'}>
          Selecciona un pokemón
        </option>
        {options.map((op, index) => {
          return (
            <option key={index} value={op}>
              {op}
            </option>
          );
        })}
      </Form.Select>

      <Button className="btn-dark mt-4" onClick={() => verPokemon()}>
        Ver detalle
      </Button>
    </Container>
  );
}

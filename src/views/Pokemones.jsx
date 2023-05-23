import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import { PokeContext } from '../PokeContext';

export default function Pokemones() {
  const {
    options,
    setOptions,
    pokemonName,
    setPokemonName,
    verPokemon,
    pokemon,
    setPokemon,
  } = useContext(PokeContext);

  return (
    <Container className="text-center">
      <h1 className="mt-4">Selecciona un pokemón</h1>

      <Form.Select
        aria-label="Default select example"
        className="mt-4"
        defaultValue={'x'}
        onChange={(e) => setPokemonName(e.target.value)}
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

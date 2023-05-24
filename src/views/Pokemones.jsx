import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import { PokeContext } from '../PokeContext';

export default function Pokemones() {
  const { options, setPokemonName, verPokemon } = useContext(PokeContext);

  return (
    <Container className="ptnav text-center d-flex flex-column align-items-center">
      <h1 className="mt-4">Selecciona un pokemón</h1>

      <Form.Select
        aria-label="Default select example"
        className="mt-4 selw"
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

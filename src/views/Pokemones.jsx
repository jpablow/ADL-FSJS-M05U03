import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';

export default function Pokemones() {
  const [options, setOptions] = useState([]);

  const getOptions = async () => {
    const url = 'https://pokeapi.co/api/v2/pokemon';
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
    <Container className="text-center">
      <h1 className="mt-4">Selecciona un pokemón</h1>

      <Form.Select
        aria-label="Default select example"
        className="mt-4"
        defaultValue={'x'}
        onChange={(e) => console.log(e.target.value)}
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

      <Button className="btn-dark mt-4">Ver detalle</Button>
    </Container>
  );
}

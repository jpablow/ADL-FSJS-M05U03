import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Pokemones() {
  return (
    <Container className="text-center">
      <h1 className="mt-4">Selecciona un pokemón</h1>

      <Form.Select aria-label="Default select example" className="mt-4">
        <option disabled>Selecciona un pokemón</option>
        {/* insertar map para options */}
        <option value="1">One</option>
      </Form.Select>

      <Button className="btn-dark mt-4">Ver detalle</Button>
    </Container>
  );
}

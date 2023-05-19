import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/esm/Container';

export default function Home() {
  return (
    <Container className="text-center">
      <h1 className="mt-4">Bienvenido maestro pokemón</h1>

      <Image src="Pikachu01.png" width="350" className="mt-4" />
    </Container>
  );
}

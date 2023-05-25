import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import { PokeContext } from '../PokeContext';
import Badge from 'react-bootstrap/Badge';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/Row';
import { useParams } from 'react-router-dom';

export default function Pokemones() {
  const { pokemonName, pokemon, pokemonStats } = useContext(PokeContext);
  const { pokeName } = useParams();

  return (
    <Container className="ptnav mt-4 text-center">
      <h2 style={{ textTransform: 'capitalize' }}>{pokeName}</h2>
      <Container>
        <Row className="justify-content-md-center">
          <Col></Col>
          <Col
            md="auto"
            className="d-flex justify-content-center align-items-center poke"
          >
            <Image src={pokemon.img} className="pokeImg" />

            <div className="text-start m-4">
              <ul>
                {pokemonStats[0]?.map((x, i) => {
                  return (
                    <li key={i}>
                      {x.name}:{' '}
                      <Badge pill bg="danger">
                        {x.value}
                      </Badge>
                    </li>
                  );
                })}
                <br></br>
                <p>
                  <Badge pill bg="warning" text="dark">
                    {pokemon.types}
                  </Badge>
                </p>
              </ul>
            </div>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </Container>
  );
}

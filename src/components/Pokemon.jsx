import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
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
    <Container className="mt-4 text-center poke p-4">
      <h2 style={{ textTransform: 'capitalize' }}>{pokemonName}</h2>
      <Container className="mt-4 p-4 text-center d-flex justify-content-center align-items-center">
        <Image src={pokemon.img} className="pokeImg" />

        <div className="text-start m-4" id="pokeData">
          <ul>
            <li>HP: {pokemon.stats[0].value}</li>
            <li>Attack: {pokemon.stats[1].value}</li>
            <li>Defense: {pokemon.stats[2].value}</li>
            <li>Special Attack: {pokemon.stats[3].value}</li>
            <li>Special Defense: {pokemon.stats[4].value}</li>
            <li>Speed: {pokemon.stats[5].value}</li>
            <br></br>
            <p>{pokemon.types}</p>
          </ul>
        </div>
      </Container>
    </Container>
  );
}

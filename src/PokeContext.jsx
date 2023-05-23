import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const PokeContext = createContext();

export const Provider = ({ children }) => {
  const [options, setOptions] = useState({});
  const [pokemonName, setPokemonName] = useState('');
  const [pokemon, setPokemon] = useState({});
  const navigate = useNavigate();
  const url = 'https://pokeapi.co/api/v2/pokemon/';

  const getPokemones = async () => {
    const resp = await fetch(url);
    const data = await resp.json();
    const opts = data.results.map((d) => d.name);
    setOptions(opts);
  };

  const getPokemon = async (pokeName) => {
    const resp = await fetch(`${url}${pokeName}`);
    const data = await resp.json();
    const img = data.sprites.other.dream_world.front_default;
    const stats = data.stats.map((stat) => ({
      name: stat.stat.name,
      value: stat.base_stat,
    }));
    const types = data.types.map(({ type }) => type.name).join(' - ');
    setPokemon({ img, stats, types });
    console.log(pokemon);
  };

  const verPokemon = async () => {
    getPokemon(pokemonName);

    pokemonName
      ? navigate(`/pokemones/${pokemonName}`)
      : alert(
          'Debes seleccionar un pokemón para ver su información, intenta nuevamente.'
        );
  };

  useEffect(() => {
    return () => {
      getPokemones();
    };
  }, []);

  useEffect(() => {
    console.log(pokemon);
  }, [pokemon]);

  const globalState = {
    options,
    setOptions,
    pokemonName,
    setPokemonName,
    verPokemon,
    pokemon,
    setPokemon,
  };
  return (
    <PokeContext.Provider value={globalState}>{children}</PokeContext.Provider>
  );
};

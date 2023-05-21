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
    <Container className="mt-4 text-center poke">
      <div
        className=""
        id="pokeImg"
        style={{ backgroundImage: url('/') }}
      ></div>

      <div id="pokeData">
        <h5>charmander</h5>
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
  );
}

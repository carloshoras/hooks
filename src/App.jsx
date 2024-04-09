import './App.css';
import useFetchCharacters from './hooks/useFecthCharacters';

function App() {
  const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/1';
  const urlRick = 'https://rickandmortyapi.com/api/character/1';
  
  const {data:dataPokemon, loading} = useFetchCharacters(urlPokemon)
  const {data:dataRick} = useFetchCharacters(urlRick)

  return (
    <>
      <h2>Personaje Pokemon</h2>
      <p>{dataPokemon.name}</p>
      <img src={loading ? null : dataPokemon.sprites.front_default}  />

      <h2>Personaje Rick and Morty</h2>
      <p>{dataRick.name}</p>
      <img src={dataRick.image}  />
    </>
  );
}

export default App;

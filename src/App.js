import { useState } from 'react';
import Banner from './componentes/Banner';
import Forms from './componentes/Forms'
import Type from './componentes/Type';

function App() {

  const [pokemons, setPokemons] = useState([])

  const atNewPokemon = (pokemon) => {
    console.log(pokemon)
    setPokemons({...pokemons, pokemon})
  }
  return (
    <div className="App">
      <Banner />
      <Forms atCreatedPokemon={pokemon => atNewPokemon(pokemon)}/>
      <Type/>
    </div>
  );
}

export default App;

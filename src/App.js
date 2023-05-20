import { useState } from 'react';
import Banner from './componentes/Banner';
import Forms from './componentes/Forms'
import Type from './componentes/Type';

function App() {

   const types = [
    {
    name:'grass',
    primaryColor:'#57C278',
    secondaryColor:'#d9f7e9'
  },
  {
    name:'fire',
    primaryColor:'#FFBA05',
    secondaryColor:'#FFEEDF'
  },
  {
    name:'water',
    primaryColor:'#82CFFA',
    secondaryColor:'#E8F8FF'
  },
  {
    name:'poison',
    primaryColor:'#BAF',
    secondaryColor:'#BAF3'
  },
  {
    name:'fairy',
    primaryColor:'#FAE',
    secondaryColor:'#FAE2'
  }
] 

  const [pokemons, setPokemons] = useState([])

  const atNewPokemon = (pokemon) => {
    console.log(pokemon)
    setPokemons([...pokemons, pokemon])
  }

  return (
    <div className="App">
      <Banner />
      <Forms types={types.map(type => type.name)} atCreatedPokemon={pokemon => atNewPokemon(pokemon)}/>
      {types.map(type => <Type 
      key={type.name} 
      name={type.name} 
      primaryColor={type.primaryColor} 
      secondaryColor={type.secondaryColor} 
      pokemons={pokemons.filter(pokemons => pokemons.type === type.name)}/>)}
    </div>
  );
}

export default App;

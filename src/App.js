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
  },
  {
    name:'dark',
    primaryColor:'#BAF',
    secondaryColor:'#BAF3'
  },
  {
    name:'electric',
    primaryColor:'#BAF',
    secondaryColor:'#BAF3'
  },
  {
    name:'bug',
    primaryColor:'#BAF',
    secondaryColor:'#BAF3'
  },
  {
    name:'flying',
    primaryColor:'#BAF',
    secondaryColor:'#BAF3'
  },
  {
    name:'fighting',
    primaryColor:'#BAF',
    secondaryColor:'#BAF3'
  },
  {
    name:'normal',
    primaryColor:'#BAF',
    secondaryColor:'#BAF3'
  },
  {
    name:'ground',
    primaryColor:'#BAF',
    secondaryColor:'#BAF3'
  },
  {
    name:'rock',
    primaryColor:'#BAF',
    secondaryColor:'#BAF3'
  },
  {
    name:'ghost',
    primaryColor:'#BAF',
    secondaryColor:'#BAF3'
  },
  {
    name:'psychic',
    primaryColor:'#BAF',
    secondaryColor:'#BAF3'
  },
  {
    name:'ice',
    primaryColor:'#BAF',
    secondaryColor:'#BAF3'
  },
  {
    name:'dragon',
    primaryColor:'#BAF',
    secondaryColor:'#BAF3'
  },
    {
    name:'steel',
    primaryColor:'#BAF',
    secondaryColor:'#BAF3'
  },

] 

  const [pokemons, setPokemons] = useState([])

  const atNewPokemon = (pokemon) => {
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

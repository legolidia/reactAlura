import { useState } from 'react';
import Banner from './componentes/Banner';
import Forms from './componentes/Forms'
import Type from './componentes/Type';

function App() {

  const types = [
    {
    name:'grass',
    primaryColor:'',
    secondaryColor:''
  },
  {
    name:'fire',
    primaryColor:'',
    secondaryColor:''
  },
  {
    name:'water',
    primaryColor:'',
    secondaryColor:''
  },
  {
    name:'normal',
    primaryColor:'',
    secondaryColor:''
  },
  {
    name:'fighting',
    primaryColor:'',
    secondaryColor:''
  },
  {
    name:'flying',
    primaryColor:'',
    secondaryColor:''
  },
  {
    name:'poison',
    primaryColor:'',
    secondaryColor:''
  },
  {
    name:'ground',
    primaryColor:'',
    secondaryColor:''
  },
  {
    name:'rock',
    primaryColor:'',
    secondaryColor:''
  },
  {
    name:'electric',
    primaryColor:'',
    secondaryColor:''
  },
  {
    name:'psychic',
    primaryColor:'',
    secondaryColor:''
  },
  {
    name:'ice',
    primaryColor:'',
    secondaryColor:''
  },
  {
    name:'ghost',
    primaryColor:'',
    secondaryColor:''
  },
  {
    name:'dragon',
    primaryColor:'',
    secondaryColor:''
  },
  {
    name:'dark',
    primaryColor:'',
    secondaryColor:''
  },
  {
    name:'steel',
    primaryColor:'',
    secondaryColor:''
  },
  {
    name:    'fairy',
    primaryColor:'',
    secondaryColor:''
  }
] 

  const [pokemons, setPokemons] = useState([])

  const atNewPokemon = (pokemon) => {
    console.log(pokemon)
    setPokemons({...pokemons, pokemon})
  }
  return (
    <div className="App">
      <Banner />
      <Forms atCreatedPokemon={pokemon => atNewPokemon(pokemon)}/>
      <Type name="fire"/>
      <Type name="water"/>
      <Type name="grass"/>
    </div>
  );
}

export default App;

import Pokemon from '../Pokemon'
import './type.css'

const Type = (props) => {
return(
  <section className='type' style={{ backgroundColor: props.secondaryColor }}>
    <h3 style={{borderColor: props.primaryColor}} >{props.name}</h3>
    <div className = 'pokemons'>
    {props.pokemons.map(pokemon => <Pokemon name={pokemon.name} img={pokemon.img}/>)}
  </div>  
  </section>

)

}

export default Type
import Pokemon from '../Pokemon'
import './type.css'

const Type = (props) => {
return(
  (props.pokemons.length > 0) 
  ? <section className='type' style={{ backgroundColor: props.secondaryColor }}>
      <h3 style={{borderColor: props.primaryColor}} >{props.name}</h3>
      <div className = 'pokemons'>
        {props.pokemons.map(pokemon => 
          <Pokemon key={pokemon.name} name={pokemon.name} 
            img={pokemon.img} backgroundColor={props.primaryColor}/>)}
      </div>  
    </section>

  : ''	
)

}

export default Type
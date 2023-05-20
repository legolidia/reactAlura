import './pokemon.css'

const Pokemon = ({name, img, type}) => {
  return (
    <div className='pokemon'>
      <div className='header'>
        <img src={img} alt={name} />
      </div>
      <div className='footer'> 
        <h4> {name}</h4>
        <h5> {type} </h5>
      </div>
    </div>
  )
}

export default Pokemon
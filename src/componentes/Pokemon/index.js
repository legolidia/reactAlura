import './pokemon.css'

const Pokemon = ({name, img, type, backgroundColor}) => {
  return (
    <div className='pokemon'>
      <div className='header' style={{backgroundColor: backgroundColor}}>
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
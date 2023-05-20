import TextLabel from '../TextLabel'
import List from '../List'
import './forms.css'
import Button from '../Button'
import { useState } from 'react'

const Forms = (props) => {
  //const types = []

  const [name, setName] = useState('')
  const [img, setImg] = useState('')
  const [type, setType] = useState('')

  const atSave = (event) => {
    event.preventDefault();
    props.atCreatedPokemon({
      name,
      img,
      type
    })
  }

  return (
    <section className='forms'>
      <form onSubmit={atSave}>
        <TextLabel
          required={true}
          label="Pokémon name:"
          placeholder="Write the name of your Pokémon."
          value={name}
          atAlteration={value => setName(value)} />

        <TextLabel
          required={true}
          label="Photo:"
          placeholder="Choose a photo of your Pokémon."
          value={img}
          atAlteration={value => setImg(value)} />

        <List
          label="Type:"
          itens={props.types}
          value={type}
          atAlteration={value => setType(value)} />
        <div className = "centerButton"> 
        <Button txt="Catch" /> </div>
      </form>
    </section>
  )
}

export default Forms;
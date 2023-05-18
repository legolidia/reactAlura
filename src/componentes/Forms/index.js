import TextLabel from '../TextLabel'
import List from '../List'
import './forms.css'
import Button from '../Button'

const Forms = () => {
  const types = [
    'grass',
    'bug',
    'fire',
    'water',
    'normal',
    'fighting',
    'flying',
    'poison',
    'ground',
    'rock',
    'electric',
    'psychic',
    'ice',
    'ghost',
    'dragon',
    'dark',
    'steel',
    'fairy'
  ]

  const atSave = (event) => {
    event.preventDefault();
    console.log("SAVED")
  }

  return (
    <section className='forms'>
      <form onSubmit={atSave}>
        <TextLabel required={true} label="Pokémon name:" placeholder="Write the name of your Pokémon."/>
        <TextLabel required={true} label="Photo:" placeholder="Choose a photo of your Pokémon." />
        <List required={true} label="Type" itens={types} />
        <Button txt="Catch"/>
      </form>
    </section>
  ) 
}

export default Forms;
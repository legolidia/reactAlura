import './List.css'

const List = (props) => {
  return (
    <div className="list">
      <p>
        <label>{props.label}</label>
        <select onChange={event => props.atAlteration(event.target.value)} required={props.required} value={props.value}>  
            {props.itens.map(item => {
              return <option key={item}> {item} </option>
            })}
        </select>
      </p>
    </div>
  )
}

export default List
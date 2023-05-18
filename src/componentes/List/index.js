import './List.css'

const List = (props) => {
  return (
    <div className="text-label">
      <p>
        <label>{props.label}</label>
        <select>  
            {props.itens.map(item => {
              return <option key={item}> {item} </option>
            })}
        </select>
      </p>
    </div>
  )
}

export default List
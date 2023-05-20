import './txtLabel.css'

const TextLabel = (props) => {
    const modifiedPlaceholder = `${props.placeholder}...`

    const atTyped = (event) => {
        props.atAlteration(event.target.value)
    }

    return (
        <div className="text-label">
           <label>
                {props.label}
            </label>
            <input value={props.value} onChange={atTyped} required={props.required} placeholder={modifiedPlaceholder} type="text" name="name" />
            
        </div>
    )
}

export default TextLabel